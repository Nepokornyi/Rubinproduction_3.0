#!/bin/zsh

set -e
unsetopt BG_NICE

PROJECT_DIR="/Users/nickrubin/Documents/Codex/2026-08-04/codex-master-brief-v1-md-nick"
cd "$PROJECT_DIR"

OLD_PIDS="$(lsof -tiTCP:3000 -sTCP:LISTEN 2>/dev/null || true)"
if [[ -n "$OLD_PIDS" ]]; then
  while IFS= read -r old_pid; do
    [[ -n "$old_pid" ]] && kill -9 "$old_pid"
  done <<< "$OLD_PIDS"
fi

export PATH="/Users/nickrubin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/nickrubin/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback:$PATH"

echo "Starting Nick Rubin site in the background..."
nohup pnpm dev > ".local-site.log" 2>&1 < /dev/null &
SERVER_PID=$!
echo "$SERVER_PID" > ".local-site.pid"
disown "$SERVER_PID" 2>/dev/null || true

for attempt in {1..30}; do
  if curl --silent --fail --output /dev/null "http://localhost:3000"; then
    echo "Site is ready: http://localhost:3000"
    echo "You can now close this Terminal window."
    exit 0
  fi
  sleep 0.5
done

echo "The site did not start. Recent log output:"
tail -n 20 ".local-site.log" 2>/dev/null || true
exit 1

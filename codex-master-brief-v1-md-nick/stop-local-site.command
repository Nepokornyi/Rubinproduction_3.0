#!/bin/zsh

PROJECT_DIR="/Users/nickrubin/Documents/Codex/2026-08-04/codex-master-brief-v1-md-nick"
cd "$PROJECT_DIR"

RUNNING_PIDS="$(lsof -tiTCP:3000 -sTCP:LISTEN 2>/dev/null || true)"
if [[ -n "$RUNNING_PIDS" ]]; then
  while IFS= read -r running_pid; do
    [[ -n "$running_pid" ]] && kill "$running_pid" 2>/dev/null || true
  done <<< "$RUNNING_PIDS"
fi

rm -f ".local-site.pid"
echo "Local Nick Rubin site has been stopped."

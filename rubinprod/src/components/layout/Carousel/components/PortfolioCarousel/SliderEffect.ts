import { ShaderMaterial, Texture } from 'three'
import * as THREE from 'three'

type SliderEffectProps = {
    parent: HTMLElement
    images: Element[]
}

type Effects = {
    material: ShaderMaterial
    images: Texture[]
}

const vertex = `
    varying vec2 vUv;
    void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 0.7 );
    }
`

const fragment = `
    varying vec2 vUv;

    uniform sampler2D currentImage;
    uniform sampler2D nextImage;

    uniform float dispFactor;

    void main() {

        vec2 uv = vUv;
        vec4 _currentImage;
        vec4 _nextImage;
        float intensity = 0.6;

        vec4 orig1 = texture2D(currentImage, uv);
        vec4 orig2 = texture2D(nextImage, uv);
        
        _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));

        _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));

        vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

        gl_FragColor = finalTexture;
    }
`

export const SliderEffect = ({
    parent,
    images,
}: SliderEffectProps): Effects => {
    const newImages = images
    let image: Texture
    const sliderImages: Texture[] = []
    const canvasWidth = newImages[0].clientWidth
    const canvasHeight = newImages[0].clientHeight
    const newParent = parent

    const renderW = canvasWidth
    const renderH = canvasHeight

    const renderer = new THREE.WebGLRenderer({
        antialias: false,
    })

    renderer.setClearColor(0x23272a, 1.0)
    renderer.setSize(renderW, renderH)
    newParent.appendChild(renderer.domElement)

    const loader = new THREE.TextureLoader()
    loader.crossOrigin = 'anonymous'

    newImages.forEach((img: Element) => {
        const imgl = new Image()
        imgl.onload = () => {
            console.log(img.clientWidth, img.clientHeight)
        }
        image = loader.load(img.getAttribute('src') + '?v=' + Date.now())
        image.magFilter = image.minFilter = THREE.LinearFilter
        image.anisotropy = renderer.capabilities.getMaxAnisotropy()
        sliderImages.push(image)
    })

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x23272a)
    const camera = new THREE.OrthographicCamera(
        renderW / -2,
        renderW / 2,
        renderH / 2,
        renderH / -2,
        1,
        1000
    )
    camera.position.z = 2

    const mat = new THREE.ShaderMaterial({
        uniforms: {
            dispFactor: { value: 0.0 },
            currentImage: { value: sliderImages[0] },
            nextImage: { value: sliderImages[1] },
        },
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        opacity: 1.0,
    })

    const width = newParent.offsetWidth
    const height = newParent.offsetHeight

    const geometry = new THREE.BufferGeometry()

    const vertices = new Float32Array([
        -width / 2,
        -height / 2,
        0,
        width / 2,
        -height / 2,
        0,
        width / 2,
        height / 2,
        0,
        -width / 2,
        height / 2,
        0,
    ])

    const indices = new Uint16Array([0, 1, 2, 2, 3, 0])

    const uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])

    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    geometry.setIndex(new THREE.BufferAttribute(indices, 1))
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))

    const object = new THREE.Mesh(geometry, mat)
    object.position.set(0, 0, 0)
    scene.add(object)

    const updateRendererSize = () => {
        const width = newParent.offsetWidth
        const height = newParent.offsetHeight

        renderer.setSize(width, height)

        camera.left = -width / 2
        camera.right = width / 2
        camera.top = height / 2
        camera.bottom = -height / 2
        camera.updateProjectionMatrix()
    }

    updateRendererSize()

    window.addEventListener('resize', updateRendererSize)

    const animate = function () {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
    }
    animate()

    return {
        material: mat,
        images: sliderImages,
    }
}

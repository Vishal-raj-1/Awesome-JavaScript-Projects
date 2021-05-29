import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js";

function main() {
  const canvas = document.querySelector("#canvas");
  const renderer = new THREE.WebGLRenderer({ canvas });

  const fov = 75;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  const scene = new THREE.Scene();

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const cubes = []; // just an array we can use to rotate the cubes
  const loader = new THREE.TextureLoader();

  const materials = [
    new THREE.MeshBasicMaterial({
      map: loader.load(
        "https://threejsfundamentals.org/threejs/resources/images/flower-1.jpg"
      ),
    }),
    new THREE.MeshBasicMaterial({
      map: loader.load(
        "https://threejsfundamentals.org/threejs/resources/images/flower-2.jpg"
      ),
    }),
    new THREE.MeshBasicMaterial({
      map: loader.load(
        "https://threejsfundamentals.org/threejs/resources/images/flower-3.jpg"
      ),
    }),
    new THREE.MeshBasicMaterial({
      map: loader.load(
        "https://threejsfundamentals.org/threejs/resources/images/flower-4.jpg"
      ),
    }),
    new THREE.MeshBasicMaterial({
      map: loader.load(
        "https://threejsfundamentals.org/threejs/resources/images/flower-5.jpg"
      ),
    }),
    new THREE.MeshBasicMaterial({
      map: loader.load(
        "https://threejsfundamentals.org/threejs/resources/images/flower-6.jpg"
      ),
    }),
  ];
  const cube = new THREE.Mesh(geometry, materials);
  scene.add(cube);
  cubes.push(cube); // add to our list of cubes to rotate

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *= 0.005;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    cubes.forEach((cube, ndx) => {
      const speed = 0.2 + ndx * 0.1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();

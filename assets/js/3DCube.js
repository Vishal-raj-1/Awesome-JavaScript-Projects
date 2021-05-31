import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";

let camera, scene, renderer, cube;

function init() {
  // Init scene
  scene = new THREE.Scene();

  // Init camera (PerspectiveCamera)
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Init renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });

  // Set size (whole window)
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Render to canvas element
  document.body.appendChild(renderer.domElement);

  // Init BoxGeometry object (rectangular cuboid)
  const geometry = new THREE.BoxGeometry(2, 2, 2);

  // Create material with color
  const material = new THREE.MeshStandardMaterial({ color: 0xff0051 });

  // Add texture -
  // const texture = new THREE.TextureLoader().load('textures/crate.gif');

  // Create material with texture
  // const material = new THREE.MeshBasicMaterial({ map: texture });

  // Create mesh with geo and material
  cube = new THREE.Mesh(geometry, material);
  // Add to scene
  scene.add(cube);

  var pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(25, 50, 25);
  scene.add(pointLight);

  // Position camera
  camera.position.z = 5;

  // Orbit controls ( mouse events )
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();
}

// Draw the scene every time the screen is refreshed
function animate() {
  requestAnimationFrame(animate);

  // Rotate cube (Change values to change speed)
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

function onWindowResize() {
  // Camera frustum aspect ratio
  camera.aspect = window.innerWidth / window.innerHeight;
  // After making changes to aspect
  camera.updateProjectionMatrix();
  // Reset size
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();

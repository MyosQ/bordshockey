// import threejs from cdn and create a simple scene
import * as THREE from 'three';

function main() {
    // create simple scene with a plane
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let shape = new THREE.Shape();
    let x = 0, y = 0, radius = 5;
    let width = 20, length = 40;
    shape.moveTo(x + radius, y);
    shape.lineTo(x + length - 2*radius, y);
    shape.absarc(x + length - radius, y + radius, radius, Math.PI * 3 / 2, 0, false);
    shape.lineTo(x + length, y + width - radius);
    shape.absarc(x + length - radius, y + width - radius, radius, 0, Math.PI / 2, false);
    shape.lineTo(x + radius, y + width);
    shape.absarc(x + radius, y + width - radius, radius, Math.PI / 2, Math.PI, false);
    shape.lineTo(x, y + radius);
    shape.absarc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2, false);

    let extrudeSettings = {
        steps: 2,
        depth: 4,
    };

    let geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    let material = new THREE.MeshBasicMaterial({ color: 0xcccccc, side: THREE.DoubleSide });
    let plane = new THREE.Mesh(geometry, material);
    plane.geometry.center();
    scene.add(plane);

    // add object on top of plane
    // let geometry2 = new THREE.BoxGeometry(10, 10, 10);
    // let material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // let cube = new THREE.Mesh(geometry2, material2);
    // cube.position.set(0, 10, 0);
    // scene.add(cube);

    // merge plane and cube into one mesh

    camera.position.z = 60;
    const animate = function () {
        requestAnimationFrame(animate);

        plane.rotation.x += 0.01;
        // plane.rotation.y += 0.001;

        renderer.render(scene, camera);
    }

    animate();


}

main();
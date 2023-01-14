import * as THREE from 'three';

export default class Arena {
    constructor(viewer) {
        this.scene = viewer.scene;
        
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
        this.scene.add(plane);

        this.mesh = plane;

        // add coordinate axes for debugging
        let axesHelper = new THREE.AxesHelper(5);
        // make coordinate axes visible and large
        axesHelper.scale.set(3, 3, 3);


        this.scene.add(axesHelper);
    }
}
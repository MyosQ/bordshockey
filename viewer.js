import * as THREE from 'three';
import Arena from './arena.js';

export default class Viewer {
    constructor(render_area) {
        this.render_area = render_area;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.render_area.appendChild(this.renderer.domElement);
        this.camera.position.z = 60;

        this.arena = null;
        this.players = null;
        this.puck = null;

        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);

        // rotate the arena
        if (this.arena) {
            this.arena.mesh.rotation.x += 0.01;
            this.arena.mesh.rotation.y += 0.01;
        }

    }

    loadArena(){
        let arena = new Arena(this);
        this.arena = arena;
    }

    loadPuck(){
        // let puck = new Puck(this);
        // this.puck = puck;
    }
    loadPlayers(){
        // 
    }
}
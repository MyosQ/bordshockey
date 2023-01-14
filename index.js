// import threejs from cdn and create a simple scene
import * as THREE from 'three';
import Viewer from './viewer.js';


// create viewer
const viewer = new Viewer(document.body);
viewer.loadArena();
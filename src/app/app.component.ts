import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene: any;  camera = null;  mesh: any; value: any

  constructor() { }

  ngOnInit() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    const geometry = new THREE.BoxGeometry(150, 150, 150);
    const material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
    this.mesh = new THREE.Mesh(geometry, material);
    this.rotate();
    this.mesh.rotation.x = 45;
    this.scene.add(this.mesh);

    this.renderer.domElement.addEventListener('click' , this.rotate);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    console.log(this.renderer.domElement)
    this.animate();
  }

  rotate(){
    console.log(this.mesh);
  }

  animate() {
    console.log(this.mesh)
    this.renderer.render(this.scene, this.camera);
  }
}
import * as THREE from 'three';
import * as CONTROL from 'node_modules/three/examples/jsm/controls/OrbitControls'
import {UiComponent} from './ui/ui.component'
import { Injectable, ElementRef, OnDestroy, NgZone, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngineService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private cameraTarget: THREE.Vector3;
  private scene: THREE.Scene;
  private controls: CONTROL.OrbitControls;
  public dirLight: THREE.DirectionalLight;
  public pointLight: THREE.PointLight;
  public ambientLight: THREE.AmbientLight;


  // N64 cube//
  public rotateSpeed: number;
  private nintendoCube1: THREE.Mesh;
  private nintendoCube2: THREE.Mesh;
  private nintendoCube3: THREE.Mesh;
  private nintendoCube4: THREE.Mesh;
  private nintendoCube5: THREE.Mesh;
  private nintendoCube6: THREE.Mesh;
  private nintendoCube7: THREE.Mesh;
  private nintendoCube8: THREE.Mesh;

  private frameId: number = null;

  public constructor(private ngZone: NgZone) {
    this.rotateSpeed = 0.008;
  }

  public ngOnDestroy() {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.scene.fog = new THREE.Fog(0x000000, 250, 1400)
    // camera 
    this.camera = new THREE.PerspectiveCamera(
      30, window.innerWidth / window.innerHeight, 1, 1500
    );
    this.camera.position.set(0, 50, 400);
    this.cameraTarget = new THREE.Vector3(0, 150, 0);

    // this.camera.position.z = 200;
    this.scene.rotation.x = .45;
    // lights
    this.dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    this.dirLight.position.set(0, 0, 1).normalize();
    this.scene.add(this.dirLight);

    this.pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
    this.pointLight.position.set(0, 0, 0);
    this.pointLight.color.setHex(0xFF0000);
    this.scene.add(this.pointLight)
    

    var ambient = new THREE.AmbientLight(0xffffff, 0.2);
    this.scene.add(ambient);
    var spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(15, 40, 0);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.05;
    spotLight.decay = 2;
    spotLight.distance = 200;
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 10;
    spotLight.shadow.camera.far = 200;
    spotLight.color.set('0xff00ff')
    this.scene.add(spotLight);



    // ------------------------------------------------------
    // Mesh
    // ------------------------------------------------------

    const red = 0xfe2015,
      blue = 0x011da9,
      yellow = 0xffc001,
      green = 0x309330,
      cubeWidth = 20,
      cubeHeight = 75,
      cubeDepth = 20;
    // cube color scheme 1
    // ---------
    const cubeGeometryColor1 = new THREE.BoxGeometry(cubeWidth, cubeHeight, cubeDepth);
    cubeGeometryColor1.faces[0].color.setHex(blue);
    cubeGeometryColor1.faces[1].color.setHex(blue);
    cubeGeometryColor1.faces[2].color.setHex(blue);
    cubeGeometryColor1.faces[3].color.setHex(blue);
    cubeGeometryColor1.faces[4].color.setHex(yellow);
    cubeGeometryColor1.faces[5].color.setHex(yellow);
    cubeGeometryColor1.faces[6].color.setHex(yellow);
    cubeGeometryColor1.faces[7].color.setHex(yellow);
    cubeGeometryColor1.faces[8].color.setHex(green);
    cubeGeometryColor1.faces[9].color.setHex(green);
    cubeGeometryColor1.faces[10].color.setHex(green);
    cubeGeometryColor1.faces[11].color.setHex(green);

    // cube color scheme 2
    // ---------
    const cubeGeometryColor2 = new THREE.BoxGeometry(cubeWidth, 83, cubeDepth);
    cubeGeometryColor2.faces[0].color.setHex(red);
    cubeGeometryColor2.faces[1].color.setHex(red);
    cubeGeometryColor2.faces[2].color.setHex(blue);
    cubeGeometryColor2.faces[3].color.setHex(blue);
    cubeGeometryColor2.faces[4].color.setHex(yellow);
    cubeGeometryColor2.faces[5].color.setHex(yellow);
    cubeGeometryColor2.faces[6].color.setHex(yellow);
    cubeGeometryColor2.faces[7].color.setHex(yellow);
    cubeGeometryColor2.faces[8].color.setHex(green);
    cubeGeometryColor2.faces[9].color.setHex(green);
    cubeGeometryColor2.faces[10].color.setHex(green);
    cubeGeometryColor2.faces[11].color.setHex(green);

    // cube color scheme 3
    // ---------
    const cubeGeometryColor3 = new THREE.BoxGeometry(cubeWidth, 83, cubeDepth);
    cubeGeometryColor3.faces[0].color.setHex(blue);
    cubeGeometryColor3.faces[1].color.setHex(blue);
    cubeGeometryColor3.faces[2].color.setHex(blue);
    cubeGeometryColor3.faces[3].color.setHex(blue);
    cubeGeometryColor3.faces[4].color.setHex(yellow);
    cubeGeometryColor3.faces[5].color.setHex(yellow);
    cubeGeometryColor3.faces[6].color.setHex(yellow);
    cubeGeometryColor3.faces[7].color.setHex(yellow);
    cubeGeometryColor3.faces[8].color.setHex(red);
    cubeGeometryColor3.faces[9].color.setHex(red);
    cubeGeometryColor3.faces[10].color.setHex(green);
    cubeGeometryColor3.faces[11].color.setHex(green);
    // Default material
    // ---------
    const cubeMaterial = new THREE.MeshLambertMaterial({ vertexColors: THREE.FaceColors });
    cubeMaterial.emissive = new THREE.Color(255,255,255);
    cubeMaterial.emissiveIntensity = 0.0005;

    // ground mesh

    var material = new THREE.MeshPhongMaterial({ color: 0x808080, dithering: true });
    var geometry = new THREE.PlaneBufferGeometry(2000, 2000);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, -40, 0);
    mesh.rotation.x = - Math.PI * 0.5;
    mesh.receiveShadow = true;
    this.scene.add(mesh);




    // All mesh
    // ---------
    this.nintendoCube1 = new THREE.Mesh(cubeGeometryColor1, cubeMaterial);
    this.nintendoCube2 = new THREE.Mesh(cubeGeometryColor1, cubeMaterial);
    this.nintendoCube3 = new THREE.Mesh(cubeGeometryColor1, cubeMaterial);
    this.nintendoCube4 = new THREE.Mesh(cubeGeometryColor1, cubeMaterial);
    this.nintendoCube5 = new THREE.Mesh(cubeGeometryColor2, cubeMaterial);
    this.nintendoCube6 = new THREE.Mesh(cubeGeometryColor2, cubeMaterial);
    this.nintendoCube7 = new THREE.Mesh(cubeGeometryColor3, cubeMaterial);
    this.nintendoCube8 = new THREE.Mesh(cubeGeometryColor3, cubeMaterial);


    // ------------------------------------------------------
    // Add to scense
    // ------------------------------------------------------
    this.nintendoCube1.position.set(-30, 0, 30);
    this.nintendoCube2.position.set(30, 0, 30);
    this.nintendoCube3.position.set(-30, 0, -30);
    this.nintendoCube4.position.set(30, 0, -30);

    this.nintendoCube5.position.set(0, 0, 30);

    this.nintendoCube6.position.set(0, 0, -30);
    this.nintendoCube6.rotation.z = 2.41;
    this.nintendoCube5.rotation.z = 0.73;
    this.nintendoCube7.rotation.x = 2.41;
    this.nintendoCube8.rotation.x = 0.73;


    this.nintendoCube7.position.set(-30, 0, 0);

    this.nintendoCube8.position.set(30, 0, 0);

    this.nintendoCube1.receiveShadow = true;
    this.nintendoCube2.receiveShadow = true;
    this.nintendoCube3.receiveShadow = true;
    this.nintendoCube4.receiveShadow = true;
    this.nintendoCube5.receiveShadow = true;
    this.nintendoCube6.receiveShadow = true;
    this.nintendoCube7.receiveShadow = true;
    this.nintendoCube8.receiveShadow = true;

    this.scene.add(
      this.nintendoCube1,
      this.nintendoCube2,
      this.nintendoCube3,
      this.nintendoCube4,
      this.nintendoCube5,
      this.nintendoCube6,
      this.nintendoCube7,
      this.nintendoCube8
    );

    // controls //

    this.controls = new CONTROL.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.minDistance = 100;
    this.controls.maxDistance = 600;
    this.controls.maxPolarAngle = Infinity;


  }

  animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('DOMContentLoaded', () => {
        this.render();
      });

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  render() {
    this.frameId = requestAnimationFrame(() => {
      this.scene.rotation.y += this.rotateSpeed;
      this.renderer.render(this.scene, this.camera);
      this.render();

    });

  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
  resetPos() {
    this.camera.position.set(0, 50, 400);
  }
}

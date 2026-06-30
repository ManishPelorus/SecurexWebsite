'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

// 🎯 Tuned for a subtle, premium background
const WAVE_SPEED = 0.8;       // even slower, more graceful
const WAVE_AMPLITUDE = 25;    // gentler undulation

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
	const { theme } = useTheme();
	const containerRef = useRef<HTMLDivElement>(null);
	const sceneRef = useRef<{
		scene: THREE.Scene;
		camera: THREE.PerspectiveCamera;
		renderer: THREE.WebGLRenderer;
		particles: THREE.Points[];
		animationId: number;
	} | null>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const width = container.clientWidth || 800;
		const height = container.clientHeight || 600;

		// Tighter grid for more dots
		const SEPARATION = 100;   // was 150 – denser
		const AMOUNTX = 50;       // more columns
		const AMOUNTY = 70;       // more rows

		const scene = new THREE.Scene();
		const isDark = theme === 'dark' || !theme;
		const fogColor = isDark ? 0x000000 : 0xffffff;
		scene.fog = new THREE.Fog(fogColor, 2000, 10000);

		const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
		camera.position.set(0, 355, 1220);
		camera.lookAt(0, 0, 0);

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(width, height);
		renderer.setClearColor(fogColor, 0);

		container.appendChild(renderer.domElement);

		const positions: number[] = [];
		const colors: number[] = [];

		for (let ix = 0; ix < AMOUNTX; ix++) {
			for (let iy = 0; iy < AMOUNTY; iy++) {
				const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
				const y = 0;
				const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
				positions.push(x, y, z);
				const c = isDark ? 1.0 : 0.0;
				colors.push(c, c, c);
			}
		}

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
		geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

		const material = new THREE.PointsMaterial({
			size: 6,              // smaller dots (was 10)
			vertexColors: true,
			transparent: true,
			opacity: 0.5,         // softer (was 0.7)
			sizeAttenuation: true,
		});

		const points = new THREE.Points(geometry, material);
		scene.add(points);

		sceneRef.current = {
			scene,
			camera,
			renderer,
			particles: [points],
			animationId: 0,
		};

		const startTime = performance.now();

		const animate = () => {
			const animationId = requestAnimationFrame(animate);
			if (sceneRef.current) sceneRef.current.animationId = animationId;

			const elapsed = (performance.now() - startTime) / 1000;
			const posAttr = geometry.getAttribute('position') as THREE.BufferAttribute;

			for (let i = 0; i < posAttr.count; i++) {
				const ix = Math.floor(i / AMOUNTY);
				const iy = i % AMOUNTY;
				const y =
					Math.sin((ix + elapsed * WAVE_SPEED) * 0.3) * WAVE_AMPLITUDE +
					Math.cos((iy + elapsed * (WAVE_SPEED * 0.9)) * 0.5) * WAVE_AMPLITUDE;
				posAttr.setY(i, y);
			}
			posAttr.needsUpdate = true;

			renderer.render(scene, camera);
		};

		const handleResize = () => {
			if (!container) return;
			const w = container.clientWidth || 800;
			const h = container.clientHeight || 600;
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h);
		};

		const resizeObserver = new ResizeObserver(handleResize);
		resizeObserver.observe(container);
		window.addEventListener('resize', handleResize);

		animate();

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('resize', handleResize);

			if (sceneRef.current) {
				cancelAnimationFrame(sceneRef.current.animationId);
				sceneRef.current.scene.traverse((object) => {
					if (object instanceof THREE.Points) {
						object.geometry.dispose();
						if (Array.isArray(object.material)) {
							object.material.forEach((m) => m.dispose());
						} else {
							object.material.dispose();
						}
					}
				});
				sceneRef.current.renderer.dispose();
				if (container && sceneRef.current.renderer.domElement) {
					container.removeChild(sceneRef.current.renderer.domElement);
				}
			}
		};
	}, []);

	useEffect(() => {
		if (!sceneRef.current) return;

		const isDark = theme === 'dark' || !theme;
		const fogColor = isDark ? 0x000000 : 0xffffff;
		const particleColor = isDark ? 1.0 : 0.0;

		sceneRef.current.scene.fog = new THREE.Fog(fogColor, 2000, 10000);
		sceneRef.current.renderer.setClearColor(fogColor, 0);

		sceneRef.current.particles.forEach((points) => {
			const colorAttr = points.geometry.getAttribute('color') as THREE.BufferAttribute;
			for (let i = 0; i < colorAttr.count; i++) {
				colorAttr.setXYZ(i, particleColor, particleColor, particleColor);
			}
			colorAttr.needsUpdate = true;
		});
	}, [theme]);

	return (
		<div
			ref={containerRef}
			className={cn('relative w-full h-full', className)}
			{...props}
		/>
	);
}
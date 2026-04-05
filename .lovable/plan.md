

## Compress About Section Images to WebP

The `romania-eu.jpg` is 2.1MB — very large. `israel-tech.jpg` is already small at 60KB but can still benefit from WebP conversion.

### Steps

1. **Convert both images to WebP** (640px width, quality 80) using `cwebp`:
   - `src/assets/israel-tech.jpg` → `src/assets/israel-tech.webp`
   - `src/assets/romania-eu.jpg` → `src/assets/romania-eu.webp`

2. **Update imports in `src/components/AboutSection.tsx`**:
   - Change `import israelTechImg from "@/assets/israel-tech.jpg"` → `.webp`
   - Change `import romaniaEuImg from "@/assets/romania-eu.jpg"` → `.webp`

This follows the same pattern used for the service images and should dramatically reduce load time, especially for the 2.1MB romania-eu image.


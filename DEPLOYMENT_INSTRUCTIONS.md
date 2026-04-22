# Instrucciones para Subir el Código Completo a GitHub

Tu repositorio **Avante-Website** ya está creado en: https://github.com/Crismendi12/Avante-Website

## Opción Recomendada: Subir desde tu Máquina Local

### Paso 1: Descarga este proyecto
Puedes descargar todo el código de este workspace o clonarlo si tienes acceso.

### Paso 2: Abre una terminal en la carpeta del proyecto

### Paso 3: Ejecuta estos comandos

```bash
# Inicializar git (si no está inicializado)
git init

# Configurar tu identidad
git config user.name "Crismendi12"
git config user.email "tu-email@ejemplo.com"

# Añadir todos los archivos
git add .

# Crear el commit inicial
git commit -m "Initial commit: Avante Website - React + Vite + Tailwind CSS application

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# Conectar con el repositorio remoto
git remote add origin https://github.com/Crismendi12/Avante-Website.git

# Cambiar a la rama main
git branch -M main

# Subir todo el código
git push -u origin main --force
```

### Paso 4: Verificar
Visita https://github.com/Crismendi12/Avante-Website para ver tu código completo.

## Archivos Principales del Proyecto

- `src/app/App.tsx` - Componente principal de la aplicación
- `src/app/routes.tsx` - Configuración de rutas con React Router
- `src/app/AppContentWrapper.tsx` - Contenido principal de la página de inicio
- `src/app/hooks/useLanguage.tsx` - Hook para multi-idioma (ES/EN)
- `src/app/pages/` - Páginas de la aplicación
  - `HomePage.tsx`
  - `WhyAvantePage.tsx`
  - `LibraryPage.tsx`
- `src/app/components/` - Componentes reutilizables
- `src/styles/` - Estilos globales y tema
- `package.json` - Dependencias del proyecto
- `vite.config.ts` - Configuración de Vite

## Tecnologías Incluidas

✅ React 19
✅ Vite 6
✅ Tailwind CSS 4
✅ TypeScript
✅ React Router 7
✅ Shadcn UI Components
✅ Motion (Framer Motion)
✅ Lucide Icons
✅ Three.js para efectos 3D

## Próximos Pasos Después de Subir

1. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   pnpm dev
   ```

3. **Construir para producción:**
   ```bash
   pnpm build
   ```

## Notas Importantes

- El archivo `.gitignore` ya está configurado para excluir `node_modules/` y otros archivos temporales
- Todos los componentes están usando Tailwind CSS 4 y diseño responsive
- El proyecto incluye soporte multi-idioma (Español/Inglés)
- Los assets están en `src/imports/`

---

Si tienes problemas con el push, asegúrate de tener configurado tu token de GitHub o SSH key.

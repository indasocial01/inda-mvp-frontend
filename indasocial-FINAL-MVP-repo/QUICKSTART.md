# 🚀 QUICKSTART - IndaSocial MVP

## ⚡ Start en 3 Pasos

### 1️⃣ Instalar
```bash
npm install
```

### 2️⃣ Correr
```bash
npm start
```

### 3️⃣ Login
- Click "Demo Login (Test Users)"
- Selecciona: **Sarah**, **EcoFashion**, o **Alex**
- ¡Listo! 🎉

---

## 👥 Usuarios de Prueba

| Usuario | Tipo | Reach | Stats |
|---------|------|-------|-------|
| **Sarah** | Creator | 120k | $45k earnings, 8 projects |
| **EcoFashion** | Brand | 500k | $158k invested, 5 campaigns |
| **Alex** | Creator | 80k | $28k earnings, 3 projects |

---

## 🎯 Qué Probar

### ✅ Flujo Completo:
1. Login → Onboarding → Dashboard
2. Navigate todas las secciones (9 dashboards)
3. Ver stats, matches, blog posts
4. User profile dropdown
5. Logout

### ✅ Dashboards:
- **Dashboard** - Overview con stats
- **Sales** - Revenue tracking con charts
- **Connect** - Match system con brands/creators
- **Match Chat** - Lista de matches
- **Community** - Feed de comunidad
- **Events** - Calendario de eventos
- **Blog** - Posts de la comunidad
- **Notifications** - Centro de notificaciones
- **Settings** - Perfil y configuración

---

## 📱 Responsive

Funciona perfecto en:
- ✅ Desktop (1920x1080+)
- ✅ Tablet (768px+)
- ✅ Mobile (375px+)

---

## 🐛 Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Puerto ocupado
```bash
# Cambia el puerto en package.json:
"start": "PORT=3001 react-scripts start"
```

### Error de compilación
Verifica que tienes Node.js 16+ instalado:
```bash
node --version  # Debe ser v16+
```

---

## 🎨 Personalizar

### Cambiar colores:
Edita `tailwind.config.js`

### Agregar usuarios:
Edita `src/data/mockData.js`

### Modificar dashboards:
Edita archivos en `src/pages/`

---

## 📦 Build para Producción

```bash
npm run build
```

Esto genera `/build` listo para deploy.

---

## 🚀 Deploy a ICP

1. Build el proyecto:
   ```bash
   npm run build
   ```

2. Deploy la carpeta `/build` a tu canister

3. Conecta con tu sistema de auth existente

---

## ✅ Checklist de Testing

- [ ] Login funciona (3 usuarios)
- [ ] Onboarding muestra Creator/Brand
- [ ] Dashboard carga stats
- [ ] Navegación funciona (9 secciones)
- [ ] User profile dropdown abre
- [ ] Logout regresa a login
- [ ] Responsive en mobile
- [ ] No hay errores en consola

---

## 📞 Soporte

¿Problemas? Revisa:
1. Console del navegador (F12)
2. Terminal donde corre npm start
3. README.md principal

---

**¡Listo para impresionar!** 🎉

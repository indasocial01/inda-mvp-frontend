# 🚀 IndaSocial MVP - 4 Day Sprint

## 📦 ¿Qué es esto?

MVP funcional de IndaSocial con **TIER 1 + TIER 2** features:

### ✅ TIER 1 (Crítico):
1. ✅ Login (wallet + Google + Demo users)
2. ✅ Onboarding (Creator/Brand selection)
3. ✅ Dashboard Principal (stats overview)
4. ✅ Connect Brands/Creators (matching feed)
5. ✅ Sistema de Match (modal + list)
6. ✅ Navegación completa (9 secciones)

### ✅ TIER 2 (Importante):
7. ✅ Sales Dashboard (revenue tracking)
8. ✅ Blog (community posts)
9. ✅ Notificaciones (activity feed)
10. ✅ Settings (profile management)

---

## 🏃 Quick Start

### 1. Instalar dependencias:
```bash
npm install
```

### 2. Correr en desarrollo:
```bash
npm start
```

### 3. Build para producción:
```bash
npm run build
```

---

## 👥 Usuarios de Prueba

El MVP incluye 3 usuarios pre-cargados para testing:

### Sarah (Creator)
- **Username:** sarah
- **Type:** Creator
- **Reach:** 120k
- **Earnings:** $45,250
- **Projects:** 8 active

### EcoFashion (Brand)
- **Username:** ecofashion
- **Type:** Brand
- **Reach:** 500k
- **Investment:** $158,000
- **Campaigns:** 5 active

### Alex (Creator)
- **Username:** alex
- **Type:** Creator
- **Reach:** 80k
- **Earnings:** $28,500
- **Projects:** 3 active

---

## 🔐 Cómo Loguearse

1. Click en "Demo Login (Test Users)"
2. Selecciona uno de los 3 usuarios
3. ¡Listo! Ya estás dentro

---

## 📁 Estructura del Proyecto

```
src/
├── components/       # Sidebar, Header
├── context/         # AuthContext (user management)
├── data/            # mockData.js (test data)
├── pages/           # 11 páginas (Login, Onboarding, 9 dashboards)
├── App.js           # Main app with routing
├── index.js         # React entry point
└── index.css        # Tailwind + custom styles
```

---

## 🎯 Features Funcionales

### ✅ Lo que FUNCIONA:
- Login con 3 usuarios de prueba
- Onboarding (elegir Creator/Brand)
- Dashboard con stats dinámicas
- Navegación entre 9 secciones
- Ver marcas/creadores disponibles
- Sistema de matches
- Sales dashboard con charts
- Blog posts
- Notificaciones
- Settings (ver/editar perfil)
- User profile dropdown
- Responsive design

### ⚠️ Lo que es MOCK DATA:
- Todos los datos están pre-cargados
- Matches son simulados
- No hay backend real (solo localStorage)
- No hay usuarios reales interactuando

---

## 🚀 Deploy a ICP

### Opción 1: Build estático
```bash
npm run build
# Deploy la carpeta /build a tu canister ICP
```

### Opción 2: Integrar con tu login existente
El código está listo para conectarse con tu sistema de auth actual en:
`https://mkcdu-oqaaa-aaaaf-qaofq-cai.icp0.io/`

Solo necesitas:
1. Reemplazar el Login.jsx con tu componente de login ICP
2. Actualizar AuthContext para usar tus usuarios reales
3. Conectar con tus canisters

---

## 📝 Próximos Pasos (Semana 2)

Después del MVP, agregar:
- [ ] Backend real con ICP canisters
- [ ] Matches reales entre usuarios
- [ ] Chat funcional
- [ ] Payments con ICP
- [ ] Notificaciones real-time
- [ ] Upload de imágenes
- [ ] User-generated content

---

## 🎨 Tech Stack

- **Frontend:** React 18
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **State:** React Context
- **Storage:** localStorage (temporal)
- **Deploy:** ICP ready

---

## 📧 Soporte

¿Dudas? ¿Bugs? Contacta al equipo de desarrollo.

---

## 🎉 ¡Listo para Testear!

El MVP está **100% funcional** y listo para mostrar a usuarios reales.

**¡Buena suerte con tu demo!** 🚀

# 🎂 Miga-Co | Sistema de Catálogo - GUÍA COMPLETA

## ✅ Estado Actual del Proyecto

**Backend:** ✅ Corriendo en `http://localhost:3000`
**Frontend:** ✅ Corriendo en `http://localhost:5174`
**Base de Datos:** ✅ 8 productos iniciales cargados

---

## 🚀 Cómo Acceder al Catálogo

1. **Abre tu navegador** en: `http://localhost:5174`
2. **Navega a Productos** usando:
   - El botón "Productos" en el navbar
   - O accede directamente: `http://localhost:5174/productos`

---

## 📦 Funcionalidades Implementadas

### 1️⃣ **Buscador Inteligente**

- Input de búsqueda en la parte superior del catálogo
- Sugerencias automáticas mientras escribes
- Busca por: nombre, tags, categoría o descripción
- Las sugerencias se muestran en tiempo real

### 2️⃣ **Filtro de Categorías**

Las categorías disponibles son:

- 🍰 Pasteles
- 🍪 Repostería y Galletas
- 🥐 Panadería
- ✨ Gelatinas (Postres gelificados)
- 🥄 Materias Primas

Para cambiar de categoría: **Click en los botones visuales** del menú de categorías

### 3️⃣ **Filtros Avanzados**

Haz click en "⚙️ Filtros Avanzados" para:

- **Rango de Precio:** Slider de $0 a $500
- **Tipo de Producto:** Preparados vs. Materias Primas
- **Disponibilidad:** Mostrar solo productos en stock
- **Botones:** Aplicar cambios o limpiar filtros

### 4️⃣ **Tarjetas de Producto**

Cada producto muestra:

- **Imagen** (con zoom suave al pasar el mouse)
- **Categoría** (subcategoría si aplica)
- **Nombre** (en fuente elegante Playfair Display)
- **Descripción** parcial (primeras 80 caracteres)
- **Tags** (etiquetas de sabor/tipo - máximo 2)
- **Precio** destacado
- **Estado de Stock:** "En stock" o "Agotado"
- **Badge "✨ Personalizable"** si acepta mensaje personalizado

---

## Estilos y paleta de colores

Para mantener coherencia visual con el resto de la página usamos una paleta
verde‑natural definida en `index.css`.

```css
:root {
  --forest: #728156; /* verde oscuro – texto principal */
  --sage: #88976c; /* verde medio – botones e interacciones */
  --mint: #b6c99c; /* verde claro – fondos secundarios */
  --tea: #cfe1bb; /* verde muy claro – bordes, cards y tags */
  --cream: #e8f4dc; /* crema – fondo general del sitio */
}
```

**Fuentes utilizadas**

- _Playfair Display_ para títulos, encabezados y precios.
- _Cormorant Garamond_ para cuerpo de texto y descripciones.

---

## 🔄 Flujo de Datos

```
Frontend (React)
    ↓
API (express - localhost:3000)
    ↓
MongoDB (miga_co).productos
    ↓
Renderiza Tarjetas en Catálogo
```

### Endpoint Principal

```
GET /api/productos
```

**Parámetros opcionales:**

- `categoria` - Filtrar por categoría exacta
- `tipo_producto` - "preparado" o "materia_prima"
- `tag` - Filtrar por un tag específico
- `precio_min` - Precio mínimo
- `precio_max` - Precio máximo
- `disponible` - "true" para solo stock > 0

**Ejemplo:**

```
http://localhost:3000/api/productos?categoria=Pasteles&precio_max=400
```

---

## 📱 Responsividad

El diseño se adapta a:

- **Desktop:** Grid de 4-5 productos por fila
- **Tablet (768px):** Grid de 3 productos
- **Mobile (480px):** Grid de 2 productos

---

## 🖼️ Imágenes de Productos

Las imágenes están almacenadas como rutas en MongoDB:

- Ruta formato: `/uploads/nombre-producto.jpg`
- Se almacenan en: `multimedia.fotos_exterior[0]`

**Para agregar una imagen:**

1. Coloca el archivo en `/Backend/uploads/`
2. Actualiza el campo `multimedia.fotos_exterior` en la BD

---

## 🗄️ Estructura de Base de Datos

Cada producto en MongoDB tiene esta estructura:

```javascript
{
  "_id": ObjectId,
  "nombre": "String",
  "categoria": "String",
  "subcategoria": "String",
  "tipo_producto": "preparado|materia_prima",
  "descripcion": "String",
  "precio": Number,
  "stock": {
    "sucursal_centro": Number,
    "sucursal_norte": Number
  },
  "multimedia": {
    "fotos_exterior": [String] // URLs de imágenes
  },
  "ficha_sensorial": {
    "dulzor": Number (1-5),
    "alergenos": [String]
  },
  "personalizable": {
    "permite_mensaje": Boolean,
    "rellenos_disponibles": [String],
    "coberturas_disponibles": [String]
  },
  "tags": [String]
}
```

---

## 🚦 Verificar que Todo Funciona

### Backend (API)

```bash
cd Backend
npm run dev
# Debería ver: "Servidor corriendo en http://localhost:3000"
```

### Frontend

```bash
cd Miga-CoFront
npm run dev
# Debería ver: "Local: http://localhost:5174/"
```

### Ejecutar Seed (cargar datos iniciales)

```bash
cd Backend
npm run seed
# Debería cargar 8 productos
```

---

## 🎯 Próximas Funcionalidades

- [ ] Detalle del producto (modal o página)
- [ ] Carrito de compras
- [ ] Checkout y pago
- [ ] Gestión de pedidos
- [ ] Sistema de usuarios completo (JWT)
- [ ] Dashboard admin

---

## 📞 Estructura de Páginas de la App

- `/` → **Home** (Hero + Navbar + ChatButton)
- `/productos` → **Catálogo Completo** (Donde estás ahora)
- Futuros:
  - `/producto/:id` - Detalle de producto
  - `/carrito` - Carrito de compras
  - `/checkout` - Finalizar compra
  - `/perfil` - Perfil de usuario
  - `/admin` - Panel administrativo

---

## 💡 Tips de Uso

1. **Para buscar rápido:** Escribe en el buscador y selecciona de las sugerencias
2. **Para resetear filtros:** Haz click en "Limpiar" en los Filtros Avanzados
3. **Para ver solo disponibles:** Activa "Solo productos en stock" en Filtros
4. **Para navegar:** Usa el Navbar, funciona en todas las páginas

---

**Hecho con ❤️ usando React + Vite + Express + MongoDB**

# Image Optimization Guide

Your background image (`jp.webp`) is currently **936KB**, which can cause slower initial page loads (3+ seconds on slower connections).

## Quick Optimizations Already Applied ✅

1. **Image Preloading** - Browser loads the image earlier
2. **Fade-in Animation** - Smooth appearance once loaded
3. **Fallback Background** - Shows dark color while loading
4. **Optimized Build Config** - Better asset handling

## Further Optimization (Recommended)

To reduce the image size to under 500KB for faster loading:

### Option 1: Online Tools (Easiest)
1. Visit [Squoosh.app](https://squoosh.app) (Google's image optimizer)
2. Upload `jp.webp`
3. Adjust quality slider to 75-80%
4. Download and replace the original file
5. Target: 300-500KB

### Option 2: Using Command Line (Mac)

If you have Homebrew installed:

```bash
# Install WebP tools
brew install webp

# Compress the image (adjust quality 0-100)
cwebp -q 75 jp.webp -o jp-optimized.webp

# Replace original
mv jp-optimized.webp jp.webp
```

### Option 3: Using ImageOptim (Mac App)
1. Download [ImageOptim](https://imageoptim.com/mac)
2. Drag and drop `jp.webp` into the app
3. It will compress automatically while maintaining quality

## Image Size Guidelines

| Size | Load Time (3G) | Rating |
|------|----------------|--------|
| < 300KB | < 1s | ⭐⭐⭐ Excellent |
| 300-500KB | 1-2s | ⭐⭐ Good |
| 500-800KB | 2-3s | ⭐ Fair |
| > 800KB | 3s+ | ❌ Needs optimization |

**Current**: 936KB (3+ seconds)
**Target**: 300-500KB (1-2 seconds)

## Testing Load Speed

After optimization, test your page load speed:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Chrome DevTools (Network tab)

## Alternative: Responsive Images

For even better performance, you can create multiple image sizes:

```html
<!-- In index.html -->
<link rel="preload"
      href="/jp-mobile.webp"
      as="image"
      type="image/webp"
      media="(max-width: 768px)" />
```

- Desktop: 1920x1080 @ 80% quality (~400KB)
- Mobile: 1080x1920 @ 75% quality (~200KB)
- Tablet: 1536x864 @ 75% quality (~300KB)

## Recommendation

**Start with Option 1 (Squoosh.app)** - It's the easiest and gives you visual feedback on quality vs file size trade-offs.

Target quality: **75-80%** (most images look great at this quality while being 50-70% smaller)

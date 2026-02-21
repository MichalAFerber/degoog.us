# Image Assets

This directory contains images for the De-Google.US website.

## Directory Structure

```
images/
├── products/              # Product page images (copied from assets/proton/)
│   ├── mail/
│   │   ├── logo.svg       # Proton Mail logomark
│   │   ├── logo-full.svg  # Proton Mail logo + wordmark (white)
│   │   ├── hero.png       # Hero module image
│   │   ├── section-1.png  # Feature section image 1
│   │   ├── section-2.png  # Feature section image 2
│   │   ├── desktop.png    # Desktop app screenshot (dark)
│   │   └── mobile.png     # Mobile web visual
│   ├── drive/
│   │   ├── logo.svg       # Proton Drive logomark
│   │   ├── logo-full.svg  # Proton Drive logo + wordmark (white)
│   │   ├── hero.png       # Hero module image
│   │   ├── section-1.png  # Feature section image 1
│   │   ├── section-2.png  # Feature section image 2
│   │   ├── desktop.png    # Desktop app screenshot (dark)
│   │   └── mobile.png     # Mobile web visual
│   ├── vpn/
│   │   ├── logo.svg       # Proton VPN logomark
│   │   ├── logo-full.svg  # Proton VPN logo + wordmark (white)
│   │   ├── hero.png       # Hero module image
│   │   ├── section-1.png  # Feature section image 1
│   │   ├── section-2.png  # Feature section image 2
│   │   ├── desktop.png    # Desktop app screenshot
│   │   └── mobile.png     # Mobile web visual
│   ├── pass/
│   │   ├── logo-full.svg  # Proton Pass logo + wordmark (white)
│   │   ├── hero.png       # Homescreen cover image
│   │   ├── desktop.jpg    # Lifestyle laptop photo
│   │   └── mobile.jpg     # Lifestyle mobile photo
│   ├── calendar/
│   │   ├── hero.png       # Hero module image
│   │   ├── section-1.png  # Feature section image 1
│   │   ├── section-2.png  # Feature section image 2
│   │   ├── desktop.png    # Desktop app screenshot (dark)
│   │   ├── mobile.png     # Mobile web visual
│   │   └── overview.png   # Calendar views overview
│   └── proton/
│       ├── logomark.svg       # Proton "P" logomark (white)
│       └── logomark-purple.svg # Proton "P" logomark (purple)
├── favicon.svg            # Site favicon (Proton P on purple)
├── apple-touch-icon.svg   # Apple touch icon
├── icon-192.svg           # PWA icon 192px
├── icon-512.svg           # PWA icon 512px
├── og-default.svg         # Default OpenGraph image
└── safari-pinned-tab.svg  # Safari pinned tab icon
```

## Source Assets

All Proton marketing materials are stored in `assets/proton/` (excluded from Jekyll build). Product images above are copied from the following source directories:

### Logos
- **Proton P logomark**: `assets/proton/Proton/Logomark/SVG/`
- **Proton Mail logo**: `assets/proton/Proton Mail/Logo/Logomark only/SVG/`
- **Proton VPN logo**: `assets/proton/Proton VPN/Logo/Logomark only/SVG/`
- **Proton Drive logo**: `assets/proton/Materials for Proton Partners/Creative assets/Proton Drive/Proton Drive - Logo/Logomark only/SVG/`
- **Proton Pass logo**: `assets/proton/Materials for Proton Partners/Creative assets/Proton Pass/Proton Pass - Logo/`

### Hero & Section Module Images
- `assets/proton/Product web visuals/Module/{Mail,Drive,VPN,Calendar}/`

### Mobile Component Screenshots
- `assets/proton/Product web visuals/Components/{Mail,Drive,VPN,Calendar}/`

### Desktop App Screenshots
- `assets/proton/Product app visuals/{Mail,Drive,VPN,Calendar}/Desktop/1x/`

### Lifestyle Photos (Pass)
- `assets/proton/Materials for Proton Partners/Creative assets/Proton Pass/Proton Pass - Lifestyle/`

### Banner Ads
- **Encrypted Email**: `assets/proton/Encrypted Email/{Dark,Light}/`
- **Secure and Private**: `assets/proton/Secure and Private/{Dark,Light}/`
- **High Speed VPN**: `assets/proton/High Speed VPN/{Dark,Light}/`
- **Secure VPN**: `assets/proton/Secure VPN/{Dark,Light}/`

### Content Ideas
- `assets/proton/Materials for Proton Partners/Content ideas/`

### Partner Guide
- `assets/proton/Affiliate Welcome Guide.pdf`

## Usage in Templates

Reference images in your templates:

```liquid
{{ '/assets/images/products/mail/hero.png' | relative_url }}
```

Or in markdown:

```markdown
![Alt text](/assets/images/products/mail/hero.png)
```

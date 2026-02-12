# Image Assets

This directory contains images for the DeGoog.us website.

## Directory Structure

```
images/
├── blog/              # Blog post featured images
├── products/          # Product page images
├── proton/            # Proton marketing assets
│   ├── mail/         # Proton Mail banners and visuals
│   ├── vpn/          # Proton VPN banners and visuals
│   └── banners/      # General promotional banners
├── favicon.svg        # Site favicon
├── og-default.jpg     # Default OpenGraph image (1200x630)
└── logo.png          # Site logo
```

## Proton Marketing Assets

Download official Proton marketing assets from your Partner dashboard:

### Banner Assets
- **Proton Mail - Encrypted Email**: https://drive.proton.me/urls/YTXYFR1MZG#9cBUwlNbNnf3
- **Proton Mail - Secure and Private**: https://drive.proton.me/urls/KP9D5YQ08W#BhfsjShVIBFA
- **Proton VPN - High Speed VPN**: https://drive.proton.me/urls/PJRQGFYFBC#4uVtBBVm2gLx
- **Proton VPN - Secure VPN**: https://drive.proton.me/urls/HFYYVKK014#1ejbemNUKNBx

### Product Visuals
- **Proton Mail Desktop & Mobile**: https://drive.proton.me/urls/9HX28CCFDW#0nKDZr5Sjsy8
- **Proton VPN Desktop & Mobile**: https://drive.proton.me/urls/K5K3HBGTYW#nSR8YvNAq6UN

### All Marketing Assets
- **Complete Package**: https://drive.proton.me/urls/986VS45EQG#iSxjHsR2n6iR

### Partner Guide
- https://drive.proton.me/urls/2TPW7TQZB8#3kyp1HvEvDuD

## Recommended Image Sizes

| Location | Dimensions | Format |
|----------|------------|--------|
| Blog featured image | 1200 x 630 | JPG/WebP |
| Product hero | 800 x 600 | PNG/WebP |
| OpenGraph default | 1200 x 630 | JPG |
| Favicon | 32 x 32 | SVG/PNG |
| Logo | 200 x 50 | PNG/SVG |

## Usage in Templates

Reference images in your templates:

```liquid
{{ '/assets/images/blog/my-image.jpg' | relative_url }}
```

Or in markdown:

```markdown
![Alt text](/assets/images/blog/my-image.jpg)
```

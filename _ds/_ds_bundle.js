/* @ds-bundle: {"format":4,"namespace":"ThreecoltsDesignSystem_802ae1","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CheckItem","sourcePath":"components/core/CheckItem.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"CaseStudyCard","sourcePath":"components/marketing/CaseStudyCard.jsx"},{"name":"LogoMarquee","sourcePath":"components/marketing/LogoMarquee.jsx"},{"name":"PricingCard","sourcePath":"components/marketing/PricingCard.jsx"},{"name":"RatingBadge","sourcePath":"components/marketing/RatingBadge.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"520cab930db6","components/core/Badge.jsx":"2195757aaa50","components/core/Button.jsx":"913cbfc3b0a9","components/core/Card.jsx":"3a3a98dd0519","components/core/CheckItem.jsx":"7334a5db7879","components/core/Logo.jsx":"f4d6f6eb67ff","components/core/Stat.jsx":"a775878a6591","components/forms/Checkbox.jsx":"93ef5e9e046f","components/forms/Input.jsx":"74612c40fdae","components/forms/SegmentedControl.jsx":"d77bb2ee15de","components/forms/Select.jsx":"5992cc306317","components/marketing/CaseStudyCard.jsx":"43478f6b62bc","components/marketing/LogoMarquee.jsx":"8f3dca068dbd","components/marketing/PricingCard.jsx":"4792ebdb1fb7","components/marketing/RatingBadge.jsx":"355ca341e132","components/marketing/SectionHeading.jsx":"b0f19a20a234","components/marketing/TestimonialCard.jsx":"e3bb386a315d","components/navigation/Accordion.jsx":"c94110b28a11","components/navigation/Tabs.jsx":"2c6ba8520f73","ui_kits/marketing-site/MarginProPage.jsx":"9140a7bf3f2a","ui_kits/marketing-site/PricingPage.jsx":"6921eee174d7","ui_kits/marketing-site/ProofPages.jsx":"10d68ab5442e","ui_kits/marketing-site/SiteChrome.jsx":"b588f84fc545"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ThreecoltsDesignSystem_802ae1 = window.ThreecoltsDesignSystem_802ae1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 28,
  md: 36,
  lg: 48
};
/** Initial-letter avatar used on testimonials; falls back to an image when src is given. */
function Avatar({
  name = '',
  src,
  size = 'md',
  tone = 'neutral',
  style,
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const initial = (name || '?').trim().charAt(0).toUpperCase();
  const tones = {
    neutral: {
      background: 'var(--tc-ink-100)',
      color: 'var(--tc-ink-700)'
    },
    accent: {
      background: 'var(--tc-purple-100)',
      color: 'var(--tc-purple-700)'
    },
    gradient: {
      background: 'var(--tc-gradient-mark)',
      color: 'var(--tc-white)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name,
    style: {
      width: px,
      height: px,
      borderRadius: 'var(--tc-radius-pill)',
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: 'var(--tc-font-display)',
      fontWeight: 'var(--tc-weight-bold)',
      fontSize: Math.round(px * 0.4),
      ...tones[tone],
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initial);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'var(--tc-ink-100)',
    color: 'var(--tc-ink-700)'
  },
  accent: {
    background: 'var(--tc-purple-100)',
    color: 'var(--tc-purple-700)'
  },
  success: {
    background: 'var(--tc-success-bg)',
    color: 'var(--tc-success)'
  },
  warning: {
    background: 'var(--tc-warning-bg)',
    color: '#8A5F09'
  },
  info: {
    background: 'var(--tc-info-bg)',
    color: '#0C6A96'
  },
  inverse: {
    background: 'var(--tc-ink-900)',
    color: 'var(--tc-white)'
  },
  gradient: {
    background: 'var(--tc-gradient-mark)',
    color: 'var(--tc-white)'
  }
};

/** Small pill label: "New", "Coming soon", "Beta", "Best value". */
function Badge({
  children,
  tone = 'neutral',
  size = 'md',
  uppercase = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: size === 'sm' ? 20 : 24,
      padding: size === 'sm' ? '0 8px' : '0 10px',
      borderRadius: 'var(--tc-radius-pill)',
      font: 'var(--tc-text-overline)',
      fontSize: size === 'sm' ? 11 : 'var(--tc-size-overline)',
      letterSpacing: uppercase ? 'var(--tc-tracking-overline)' : '0.01em',
      textTransform: uppercase ? 'uppercase' : 'none',
      whiteSpace: 'nowrap',
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '0 16px',
    height: 36,
    fontSize: 'var(--tc-size-body-sm)'
  },
  md: {
    padding: '0 22px',
    height: 44,
    fontSize: 'var(--tc-size-body-sm)'
  },
  lg: {
    padding: '0 30px',
    height: 54,
    fontSize: 'var(--tc-size-body)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    border: '1px solid var(--action-primary-bg)'
  },
  secondary: {
    background: 'var(--action-secondary-bg)',
    color: 'var(--action-secondary-fg)',
    border: '1px solid var(--action-secondary-border)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--action-ghost-fg)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--tc-white)',
    color: 'var(--tc-ink-900)',
    border: '1px solid var(--tc-white)'
  },
  outlineInverse: {
    background: 'transparent',
    color: 'var(--tc-white)',
    border: '1px solid var(--border-inverse)'
  },
  gradient: {
    background: 'var(--tc-gradient-mark)',
    color: 'var(--tc-white)',
    border: '1px solid transparent'
  }
};

/** Pill action button. Hovering swaps the label with an identical copy sliding up from below. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  iconRight,
  iconLeft,
  disabled = false,
  fullWidth = false,
  slideOnHover = true,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const Tag = href ? 'a' : 'button';
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: s.height,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: 'var(--tc-font-text)',
    fontWeight: 'var(--tc-weight-semibold)',
    letterSpacing: 'var(--tc-tracking-body)',
    borderRadius: 'var(--tc-radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    position: 'relative',
    transition: 'var(--tc-transition-control)',
    ...v,
    ...(disabled ? {
      background: 'var(--action-disabled-bg)',
      color: 'var(--action-disabled-fg)',
      borderColor: 'transparent'
    } : null),
    ...(hover && !disabled ? {
      filter: variant === 'secondary' || variant === 'ghost' ? 'none' : 'brightness(1.12)',
      background: variant === 'secondary' ? 'var(--tc-ink-050)' : variant === 'ghost' ? 'var(--tc-ink-100)' : v.background
    } : null),
    ...style
  };
  const label = slideOnHover ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      overflow: 'hidden',
      height: '1.3em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      gridArea: '1/1',
      transition: 'transform var(--tc-duration-base) var(--tc-ease-out)',
      transform: hover ? 'translateY(-115%)' : 'translateY(0)'
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      gridArea: '1/1',
      transition: 'transform var(--tc-duration-base) var(--tc-ease-out)',
      transform: hover ? 'translateY(0)' : 'translateY(115%)'
    }
  }, children)) : children;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: href ? undefined : disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: base
  }, rest), iconLeft, label, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PADS = {
  none: 0,
  sm: 20,
  md: 28,
  lg: 40
};

/** White surface with a hairline border and 20px radius — the default container on threecolts.com. */
function Card({
  children,
  padding = 'md',
  tone = 'default',
  elevation = 'flat',
  interactive = false,
  gradientEdge = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    sunken: {
      background: 'var(--tc-ink-050)',
      border: '1px solid var(--tc-ink-100)',
      color: 'var(--text-body)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: '1px solid rgba(255,255,255,0.10)',
      color: 'rgba(255,255,255,0.72)'
    },
    wash: {
      background: 'var(--tc-gradient-wash), var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    }
  };
  const shadows = {
    flat: 'none',
    card: 'var(--tc-shadow-card)',
    raised: 'var(--tc-shadow-raised)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--tc-radius-card)',
      padding: PADS[padding],
      boxShadow: hover ? 'var(--tc-shadow-raised)' : shadows[elevation],
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--tc-duration-base) var(--tc-ease-standard), transform var(--tc-duration-base) var(--tc-ease-standard), border-color var(--tc-duration-fast) var(--tc-ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      ...tones[tone],
      ...style
    }
  }, rest), gradientEdge && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '0 0 auto 0',
      height: 3,
      background: 'var(--tc-gradient-hairline)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/CheckItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One row of a plan/feature list: a tick (or dash) plus a line of copy. */
function CheckItem({
  children,
  state = 'included',
  style,
  ...rest
}) {
  const glyphs = {
    included: '✓',
    excluded: '–',
    pending: '•'
  };
  const colors = {
    included: 'var(--tc-success)',
    excluded: 'var(--tc-ink-300)',
    pending: 'var(--tc-ink-400)'
  };
  return /*#__PURE__*/React.createElement("li", _extends({
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      listStyle: 'none',
      font: 'var(--tc-text-body-sm)',
      color: state === 'excluded' ? 'var(--text-faint)' : 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      width: 18,
      height: 21,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors[state],
      fontWeight: 'var(--tc-weight-bold)'
    }
  }, glyphs[state]), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { CheckItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CheckItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  'logo-dark': 'threecolts-logo-dark.svg',
  'logo-light': 'threecolts-logo-light.svg',
  'logo-mono-dark': 'threecolts-logo-mono-dark.svg',
  'logo-mono-light': 'threecolts-logo-mono-light.svg',
  'icon-dark': 'threecolts-icon-dark.svg',
  'icon-light': 'threecolts-icon-light.svg',
  'icon-gradient': 'threecolts-icon-gradient.svg'
};

/** Threecolts logo lockups. Always render the supplied asset — never redraw the mark. */
function Logo({
  variant = 'logo-dark',
  height,
  base = '/assets/logos',
  style,
  ...rest
}) {
  const isIcon = variant.startsWith('icon');
  const h = height || (isIcon ? 40 : 28);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: base + '/' + (FILES[variant] || FILES['logo-dark']),
    alt: "Threecolts",
    style: {
      height: h,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 'var(--tc-size-h1)',
  md: 'var(--tc-size-display-md)',
  lg: 'var(--tc-size-display-lg)',
  xl: 'var(--tc-size-display-xl)'
};
/** Oversized figure with a plain caption — the workhorse proof element on threecolts.com. */
function Stat({
  value,
  label,
  size = 'md',
  tone = 'default',
  align = 'left',
  style,
  ...rest
}) {
  const color = tone === 'gradient' ? undefined : tone === 'inverse' ? 'var(--tc-white)' : 'var(--text-strong)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tc-font-display)',
      fontWeight: 'var(--tc-weight-extrabold)',
      fontSize: SIZES[size] || SIZES.md,
      lineHeight: 'var(--tc-leading-tight)',
      letterSpacing: 'var(--tc-tracking-display)',
      fontVariantNumeric: 'tabular-nums lining-nums',
      color,
      ...(tone === 'gradient' ? {
        background: 'var(--tc-gradient-sweep)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      } : null)
    }
  }, value), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body-sm)',
      color: tone === 'inverse' ? 'rgba(255,255,255,0.66)' : 'var(--text-muted)',
      maxWidth: '26ch'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox with a black checked state. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : inner;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInner(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      gap: 10,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      marginTop: 2,
      borderRadius: 'var(--tc-radius-xs)',
      border: '1px solid ' + (on ? 'var(--tc-ink-900)' : 'var(--border-strong)'),
      background: on ? 'var(--tc-ink-900)' : 'var(--surface-card)',
      color: 'var(--tc-white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      lineHeight: 1,
      transition: 'var(--tc-transition-control)'
    }
  }, on ? '✓' : ''), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line text field. */
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  id,
  fullWidth = true,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6,
      width: fullWidth ? '100%' : undefined,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      font: 'var(--tc-text-label)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 46,
      padding: '0 14px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--tc-radius-md)',
      border: '1px solid ' + (error ? 'var(--tc-danger)' : focus ? 'var(--border-focus)' : 'var(--border-subtle)'),
      boxShadow: focus && !error ? 'var(--tc-shadow-focus)' : 'none',
      transition: 'var(--tc-transition-control)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      font: 'var(--tc-text-body-sm)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'var(--tc-text-body-sm)',
      color: 'var(--text-strong)'
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      font: 'var(--tc-text-body-sm)'
    }
  }, suffix)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body-sm)',
      fontSize: 'var(--tc-size-caption)',
      color: error ? 'var(--tc-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Two-to-four option switch in a pill track — Monthly/Annual, Reseller/Brands. */
function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange,
  size = 'md',
  style,
  ...rest
}) {
  const keyOf = o => typeof o === 'string' ? o : o.value;
  const [inner, setInner] = React.useState(defaultValue ?? (options[0] ? keyOf(options[0]) : ''));
  const active = value !== undefined ? value : inner;
  const pick = k => {
    if (value === undefined) setInner(k);
    onChange && onChange(k);
  };
  const h = size === 'sm' ? 34 : 42;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: 4,
      background: 'var(--tc-ink-100)',
      borderRadius: 'var(--tc-radius-pill)',
      ...style
    }
  }, rest), options.map(o => {
    const k = keyOf(o);
    const on = k === active;
    const label = typeof o === 'string' ? o : o.label;
    const extra = typeof o === 'string' ? null : o.badge;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(k),
      style: {
        height: h - 8,
        padding: '0 18px',
        border: 0,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        borderRadius: 'var(--tc-radius-pill)',
        background: on ? 'var(--tc-white)' : 'transparent',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        boxShadow: on ? 'var(--tc-shadow-xs)' : 'none',
        font: 'var(--tc-text-label)',
        whiteSpace: 'nowrap',
        transition: 'var(--tc-transition-control)'
      }
    }, label, extra && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--tc-text-overline)',
        color: 'var(--tc-success)',
        background: 'var(--tc-success-bg)',
        borderRadius: 'var(--tc-radius-pill)',
        padding: '2px 6px'
      }
    }, extra));
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match Input. */
function Select({
  label,
  hint,
  options = [],
  id,
  fullWidth = true,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6,
      width: fullWidth ? '100%' : undefined,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      font: 'var(--tc-text-label)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      width: '100%',
      height: 46,
      padding: '0 38px 0 14px',
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      font: 'var(--tc-text-body-sm)',
      borderRadius: 'var(--tc-radius-md)',
      border: '1px solid ' + (focus ? 'var(--border-focus)' : 'var(--border-subtle)'),
      boxShadow: focus ? 'var(--tc-shadow-focus)' : 'none',
      outline: 'none',
      cursor: 'pointer',
      transition: 'var(--tc-transition-control)'
    }
  }, rest), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 11
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body-sm)',
      fontSize: 'var(--tc-size-caption)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CaseStudyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dark case-study tile: outcome figure, one-line result, "Read story" link. */
function CaseStudyCard({
  company,
  logo,
  amount,
  result,
  href,
  metrics = [],
  tone = 'inverse',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'inverse';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      justifyContent: 'space-between',
      padding: 28,
      minHeight: 260,
      borderRadius: 'var(--tc-radius-card)',
      textDecoration: 'none',
      background: dark ? 'var(--surface-inverse)' : 'var(--surface-card)',
      border: '1px solid ' + (dark ? 'rgba(255,255,255,0.10)' : 'var(--border-subtle)'),
      transform: hover ? 'translateY(-3px)' : 'none',
      boxShadow: hover ? 'var(--tc-shadow-raised)' : 'none',
      transition: 'transform var(--tc-duration-base) var(--tc-ease-standard), box-shadow var(--tc-duration-base) var(--tc-ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      font: 'var(--tc-text-label)',
      color: dark ? 'rgba(255,255,255,0.62)' : 'var(--text-muted)'
    }
  }, logo, company), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-display-lg)',
      fontSize: 'var(--tc-size-display-md)',
      color: dark ? 'var(--tc-white)' : 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums lining-nums'
    }
  }, amount), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body)',
      color: dark ? 'rgba(255,255,255,0.72)' : 'var(--text-body)'
    }
  }, result), metrics.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      paddingTop: 4,
      borderTop: '1px solid ' + (dark ? 'rgba(255,255,255,0.10)' : 'var(--border-subtle)')
    }
  }, metrics.map(m => /*#__PURE__*/React.createElement("span", {
    key: m.label,
    style: {
      display: 'grid',
      gap: 2,
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-h3)',
      fontSize: 'var(--tc-size-h4)',
      color: dark ? 'var(--tc-white)' : 'var(--text-strong)'
    }
  }, m.value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body-sm)',
      fontSize: 'var(--tc-size-caption)',
      color: dark ? 'rgba(255,255,255,0.55)' : 'var(--text-muted)'
    }
  }, m.label)))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-label)',
      color: dark ? 'var(--tc-white)' : 'var(--text-strong)',
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center'
    }
  }, "Read story ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transform: hover ? 'translateX(4px)' : 'none',
      transition: 'transform var(--tc-duration-base) var(--tc-ease-out)'
    }
  }, "\u279C")));
}
Object.assign(__ds_scope, { CaseStudyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CaseStudyCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoMarquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Continuously scrolling row of client / partner marks. Duplicates its children for a seamless loop. */
function LogoMarquee({
  children,
  speed = 38,
  direction = 'left',
  grayscale = true,
  fadeEdges = true,
  height = 34,
  style,
  ...rest
}) {
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const items = React.Children.toArray(children);
  const mask = 'linear-gradient(90deg, transparent 0, #000 96px, #000 calc(100% - 96px), transparent 100%)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: 'hidden',
      width: '100%',
      WebkitMaskImage: fadeEdges ? mask : undefined,
      maskImage: fadeEdges ? mask : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, '@keyframes tcm' + id + '{from{transform:translateX(0)}to{transform:translateX(-50%)}}'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 56,
      width: 'max-content',
      animation: 'tcm' + id + ' ' + speed + 's linear infinite',
      animationDirection: direction === 'right' ? 'reverse' : 'normal'
    }
  }, [...items, ...items].map((child, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      height,
      filter: grayscale ? 'grayscale(1)' : 'none',
      opacity: grayscale ? 0.55 : 1
    }
  }, child))));
}
Object.assign(__ds_scope, { LogoMarquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoMarquee.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Plan card: name, audience line, struck monthly price beside the annual price, CTA, feature list. */
function PricingCard({
  name,
  icon,
  audience,
  priceMonthly,
  priceAnnual,
  period = '/mo',
  savings,
  ctaLabel = 'Start Free Trial',
  ctaHref,
  footnote,
  highlight = false,
  highlightLabel = 'Best value',
  children,
  style,
  ...rest
}) {
  const showBoth = priceAnnual !== undefined && priceAnnual !== null && priceAnnual !== priceMonthly;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      padding: 28,
      borderRadius: 'var(--tc-radius-card)',
      background: 'var(--surface-card)',
      border: '1px solid ' + (highlight ? 'var(--tc-ink-900)' : 'var(--border-subtle)'),
      boxShadow: highlight ? 'var(--tc-shadow-raised)' : 'none',
      ...style
    }
  }, rest), highlight && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -12,
      left: 28
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "inverse"
  }, highlightLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, icon, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-h3)',
      fontSize: 'var(--tc-size-h4)',
      color: 'var(--text-strong)'
    }
  }, name)), audience && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-body-sm)',
      color: 'var(--text-muted)',
      minHeight: 40
    }
  }, audience), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-display-lg)',
      fontSize: 'var(--tc-size-display-md)',
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums lining-nums'
    }
  }, showBoth ? priceAnnual : priceMonthly), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, period), showBoth && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body-sm)',
      color: 'var(--text-faint)',
      textDecoration: 'line-through'
    }
  }, priceMonthly), savings && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-overline)',
      color: 'var(--tc-success)',
      background: 'var(--tc-success-bg)',
      padding: '3px 8px',
      borderRadius: 'var(--tc-radius-pill)'
    }
  }, savings)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: highlight ? 'primary' : 'secondary',
    size: "md",
    fullWidth: true,
    href: ctaHref
  }, ctaLabel), footnote && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-body-sm)',
      fontSize: 'var(--tc-size-caption)',
      color: 'var(--text-faint)'
    }
  }, footnote), children && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: '4px 0 0',
      display: 'grid',
      gap: 10,
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 18
    }
  }, children));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/RatingBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Star rating + score + review-source name, as in the site's trust strip. */
function RatingBadge({
  source,
  score,
  stars = 5,
  href,
  tone = 'default',
  style,
  ...rest
}) {
  const dark = tone === 'inverse';
  const Tag = href ? 'a' : 'span';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      textDecoration: 'none',
      font: 'var(--tc-text-label)',
      color: dark ? 'var(--tc-white)' : 'var(--text-strong)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--tc-warning)',
      letterSpacing: '0.05em',
      fontSize: 13
    }
  }, '★'.repeat(stars)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums lining-nums'
    }
  }, score), /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)',
      fontWeight: 'var(--tc-weight-regular)'
    }
  }, source));
}
Object.assign(__ds_scope, { RatingBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/RatingBadge.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow + headline + deck. Optionally paints one word of the headline with the brand gradient. */
function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  size = 'lg',
  style,
  ...rest
}) {
  const sizes = {
    md: 'var(--tc-size-h1)',
    lg: 'var(--tc-size-display-md)',
    xl: 'var(--tc-size-display-lg)'
  };
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'grid',
      gap: 16,
      maxWidth: align === 'center' ? 760 : 900,
      textAlign: align,
      justifyItems: align === 'center' ? 'center' : 'start',
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-overline)',
      letterSpacing: 'var(--tc-tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--tc-text-display-lg)',
      fontSize: sizes[size] || sizes.lg,
      letterSpacing: 'var(--tc-tracking-display)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title, highlight && /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--tc-gradient-sweep)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, highlight))), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-body-lg)',
      fontSize: 'var(--tc-size-body-lg)',
      color: 'var(--text-muted)',
      maxWidth: '62ch'
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Customer quote with a letter avatar and an optional source badge. */
function TestimonialCard({
  quote,
  name,
  role,
  avatarSrc,
  sourceLogo,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      justifyContent: 'space-between',
      padding: 24,
      borderRadius: 'var(--tc-radius-card)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'var(--tc-text-body)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    src: avatarSrc,
    size: "md"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-label)',
      color: 'var(--text-strong)'
    }
  }, name), role && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body-sm)',
      fontSize: 'var(--tc-size-caption)',
      color: 'var(--text-muted)'
    }
  }, role)), sourceLogo && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center'
    }
  }, sourceLogo)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** FAQ list. Every Threecolts page ends with one. */
function Accordion({
  items = [],
  defaultOpen = 0,
  allowMultiple = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen === null ? [] : [defaultOpen]);
  const toggle = i => setOpen(prev => prev.includes(i) ? prev.filter(x => x !== i) : allowMultiple ? [...prev, i] : [i]);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      ...style
    }
  }, rest), items.map((it, i) => {
    const on = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i === 0 ? '1px solid var(--border-subtle)' : 'none',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": on,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        padding: '22px 0',
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        font: 'var(--tc-text-h3)',
        fontSize: 'var(--tc-size-body-lg)',
        color: 'var(--text-strong)'
      }
    }, it.question, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        flex: '0 0 auto',
        width: 28,
        height: 28,
        borderRadius: 'var(--tc-radius-pill)',
        border: '1px solid var(--border-subtle)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        color: 'var(--text-muted)',
        transform: on ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--tc-duration-base) var(--tc-ease-out)'
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--tc-duration-base) var(--tc-ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        paddingBottom: 22,
        maxWidth: '68ch',
        font: 'var(--tc-text-body)',
        color: 'var(--text-muted)'
      }
    }, it.answer))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card-style product tabs — the pricing page's product picker. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'card',
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && items[0].value));
  const active = value !== undefined ? value : inner;
  const pick = (v, disabled) => {
    if (disabled) return;
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  if (variant === 'underline') {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "tablist",
      style: {
        display: 'flex',
        gap: 28,
        borderBottom: '1px solid var(--border-subtle)',
        ...style
      }
    }, rest), items.map(it => {
      const on = it.value === active;
      return /*#__PURE__*/React.createElement("button", {
        key: it.value,
        role: "tab",
        "aria-selected": on,
        onClick: () => pick(it.value, it.disabled),
        style: {
          border: 0,
          background: 'transparent',
          cursor: it.disabled ? 'not-allowed' : 'pointer',
          padding: '0 0 14px',
          font: 'var(--tc-text-label)',
          color: on ? 'var(--text-strong)' : it.disabled ? 'var(--text-faint)' : 'var(--text-muted)',
          boxShadow: on ? 'inset 0 -2px 0 var(--tc-ink-900)' : 'none',
          transition: 'var(--tc-transition-control)'
        }
      }, it.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'grid',
      gridAutoFlow: 'column',
      gap: 12,
      ...style
    }
  }, rest), items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(it.value, it.disabled),
      style: {
        textAlign: 'left',
        cursor: it.disabled ? 'not-allowed' : 'pointer',
        padding: '16px 18px',
        borderRadius: 'var(--tc-radius-lg)',
        background: 'var(--surface-card)',
        border: '1px solid ' + (on ? 'var(--tc-ink-900)' : 'var(--border-subtle)'),
        boxShadow: on ? 'var(--tc-shadow-card)' : 'none',
        opacity: it.disabled ? 0.55 : 1,
        display: 'grid',
        gap: 4,
        transition: 'var(--tc-transition-control)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        font: 'var(--tc-text-label)',
        fontSize: 'var(--tc-size-body)',
        color: 'var(--text-strong)'
      }
    }, it.icon, it.label, it.badge), it.description && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--tc-text-body-sm)',
        fontSize: 'var(--tc-size-caption)',
        color: 'var(--text-muted)'
      }
    }, it.description));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/MarginProPage.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Stat,
  SectionHeading,
  CaseStudyCard,
  Accordion,
  LogoMarquee
} = window.ThreecoltsDesignSystem_802ae1;
const CLIENTS = ['Black+Decker', 'Crocs', 'Decathlon', 'Dr Pepper', 'Keurig', "Levi's", "L'Oréal", 'Netflix', 'Conair', 'Hanes', 'Scotts', 'Stadium Goods'];
const CHANNELS = ['Amazon', 'Walmart', 'Target', 'TikTok Shop', 'Home Depot', "Macy's", "Kohl's", 'Best Buy', 'Kroger', 'CVS', 'Walgreens', 'FedEx', 'UPS', 'DHL'];
function Counter({
  target = 1009974308
}) {
  const [n, setN] = React.useState(Math.round(target * 0.972));
  React.useEffect(() => {
    const id = setInterval(() => setN(v => v >= target ? target : v + Math.ceil((target - v) / 18)), 60);
    return () => clearInterval(id);
  }, [target]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, "$", n.toLocaleString('en-US'));
}
function PipelineDiagram({
  steps,
  result
}) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % (steps.length + 1)), 1100);
    return () => clearInterval(id);
  }, [steps.length]);
  return /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    tone: "sunken",
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, steps.map((s, k) => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 34,
      padding: '0 14px',
      borderRadius: 'var(--tc-radius-pill)',
      font: 'var(--tc-text-label)',
      fontSize: 'var(--tc-size-caption)',
      background: k <= i ? 'var(--tc-ink-900)' : 'var(--surface-card)',
      color: k <= i ? 'var(--tc-white)' : 'var(--text-muted)',
      border: '1px solid ' + (k <= i ? 'var(--tc-ink-900)' : 'var(--border-subtle)'),
      transition: 'var(--tc-transition-control)'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      background: 'var(--tc-ink-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: Math.min(100, (i + 1) / (steps.length + 1) * 100) + '%',
      background: 'var(--tc-gradient-sweep)',
      transition: 'width var(--tc-duration-slow) var(--tc-ease-out)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-label)',
      color: i >= steps.length ? 'var(--tc-success)' : 'var(--text-muted)'
    }
  }, i >= steps.length ? result : 'Filing claim…'));
}
function Pillar({
  lead,
  rest,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--tc-text-h2)',
      letterSpacing: 'var(--tc-tracking-heading)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--tc-gradient-sweep)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, lead), " ", rest), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-body)',
      color: 'var(--text-muted)',
      maxWidth: '34ch'
    }
  }, body));
}
function MarginProPage({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    compact: true,
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      textAlign: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(TrustStrip, null), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--tc-text-display-2xl)',
      letterSpacing: 'var(--tc-tracking-display)',
      maxWidth: '14ch'
    }
  }, "Recover every ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--tc-gradient-sweep)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "dollar.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-body-lg)',
      fontSize: 'var(--tc-size-body-lg)',
      color: 'var(--text-muted)',
      maxWidth: '52ch'
    }
  }, "Margin is taken, not lost. Margin Pro finds it across every retailer, marketplace, and carrier you sell on."), /*#__PURE__*/React.createElement(Stat, {
    align: "center",
    size: "xl",
    value: /*#__PURE__*/React.createElement(Counter, null),
    label: "recovered to date."
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('pricing')
  }, "Get My Free Audit"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      marginTop: 26,
      paddingTop: 26,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(LogoMarquee, {
    speed: 40,
    height: 26
  }, CHANNELS.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      font: 'var(--tc-text-h3)',
      fontSize: 20,
      color: 'var(--tc-ink-700)',
      whiteSpace: 'nowrap'
    }
  }, c)))))), /*#__PURE__*/React.createElement(Section, {
    compact: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    title: "Your profit is being taken.",
    description: "That is real margin gone without a single red flag raised. It happens everywhere you sell."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      marginTop: 48
    }
  }, ['Inventory gets miscounted and lost.', 'Retailers and marketplaces take deductions and misapply fees.', 'Carriers charge aggressive rates.'].map(t => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "lg",
    style: {
      minHeight: 150,
      display: 'grid',
      alignContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--tc-radius-sm)',
      background: 'var(--tc-gradient-mark)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-h3)',
      fontSize: 'var(--tc-size-h4)',
      color: 'var(--text-strong)'
    }
  }, t))))), /*#__PURE__*/React.createElement(Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Get it back with the deepest audit in ecommerce."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40,
      margin: '56px 0 44px'
    }
  }, /*#__PURE__*/React.createElement(Pillar, {
    lead: "Every",
    rest: "channel.",
    body: "We assess all your retailers, marketplaces, and carriers \u2014 1P, 3P, or both."
  }), /*#__PURE__*/React.createElement(Pillar, {
    lead: "Every",
    rest: "transaction.",
    body: "Our AI monitors 45+ claim scenarios across the full lifecycle of your inventory."
  }), /*#__PURE__*/React.createElement(Pillar, {
    lead: "Every",
    rest: "claim.",
    body: "We gather the right documentation, file it, and track it through to recovery."
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('pricing')
  }, "Get My Free Audit")), /*#__PURE__*/React.createElement(Section, null, [{
    title: 'Inventory goes missing between truck and shelf. We trace it.',
    body: 'Margin Pro follows every step from carrier to warehouse, matching expected inventory to system records. When there is a gap, we prove where the chain broke and submit a claim before the window closes.',
    steps: ['Boxed', 'Loaded', 'Received'],
    result: 'Recovered',
    stat: '100%',
    statLabel: 'of brands we audit have recoverable discrepancies.'
  }, {
    title: 'They take too much. We find their mistakes.',
    body: 'Shortages, price claims, extra co-op, compliance fines, wrong fees, and unpaid reimbursements hit your 1P and 3P remittance statements. Margin Pro lines up your terms, POs, shipment proof, and payment data on your behalf to get your money back.',
    steps: ['T&Cs', 'POs', 'Shipments', 'Invoices'],
    result: 'Identified',
    stat: '1-3%',
    statLabel: 'of total annual revenue is typically recovered.'
  }, {
    title: 'Shipping costs keep climbing. We bring them back down.',
    body: 'Margin Pro audits every carrier invoice to surface missed refunds, then benchmarks your UPS, FedEx, DHL or owned-carrier rates against $1.4B in shipping data to build a custom negotiation plan.',
    steps: ['Benchmark', 'Negotiate', 'Reduced'],
    result: 'Monitor',
    stat: '15-30%',
    statLabel: 'average parcel cost reduction.'
  }].map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: row.title,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center',
      paddingBottom: i < 2 ? 96 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20,
      order: i % 2 ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--tc-text-display-lg)',
      fontSize: 'var(--tc-size-display-md)',
      letterSpacing: 'var(--tc-tracking-display)'
    }
  }, row.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-body-lg)',
      fontSize: 'var(--tc-size-body-lg)',
      color: 'var(--text-muted)'
    }
  }, row.body), /*#__PURE__*/React.createElement(Stat, {
    value: row.stat,
    label: row.statLabel,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconRight: "\u279C"
  }, "Explore 1P Recovery"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconRight: "\u279C"
  }, "Explore 3P Reimbursements"))), /*#__PURE__*/React.createElement("div", {
    style: {
      order: i % 2 ? 1 : 2
    }
  }, /*#__PURE__*/React.createElement(PipelineDiagram, {
    steps: row.steps,
    result: row.result
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--tc-white)'
      }
    }, "Proven at scale."),
    description: /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.6)'
      }
    }, "Over $1B recovered across retailers, marketplaces, and carriers.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(CaseStudyCard, {
    company: "Acquco",
    amount: "$3M",
    result: "3P reimbursements and carrier optimization.",
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('case-study');
    },
    style: {
      background: '#1E1E22'
    }
  }), /*#__PURE__*/React.createElement(CaseStudyCard, {
    company: "Grainger",
    amount: "$3.5M",
    result: "Shipping cost reduction.",
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      background: '#1E1E22'
    }
  }), /*#__PURE__*/React.createElement(CaseStudyCard, {
    company: "Modway",
    amount: "$2.7M",
    result: "Shipping cost recovery.",
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      background: '#1E1E22'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 40,
      font: 'var(--tc-text-body)',
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Over 2,000 brands and resellers have recovered funds to reinvest back into their business.")), /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(LogoMarquee, {
    speed: 44
  }, CLIENTS.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      font: 'var(--tc-text-h3)',
      fontSize: 22,
      color: 'var(--tc-ink-700)',
      whiteSpace: 'nowrap'
    }
  }, c))), /*#__PURE__*/React.createElement(LogoMarquee, {
    speed: 52,
    direction: "right"
  }, [...CLIENTS].reverse().map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      font: 'var(--tc-text-h3)',
      fontSize: 22,
      color: 'var(--tc-ink-700)',
      whiteSpace: 'nowrap'
    }
  }, c))))), /*#__PURE__*/React.createElement(Section, {
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--tc-container-narrow)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    title: "Frequently asked questions",
    size: "md",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: 0,
    items: [{
      question: 'What does this help me do day to day?',
      answer: 'Margin Pro monitors 45+ claim scenarios across every retailer, marketplace, and carrier you sell on, automatically catching shortages, overbilling, and lost inventory before filing windows close — then files, tracks, and re-files until you are paid.'
    }, {
      question: 'How much does it cost — do I pay if you don\'t recover anything?',
      answer: 'Margin Pro is success-based: no upfront fees, and you only pay when it recovers or saves you money. If nothing is recovered, you owe nothing.'
    }, {
      question: 'Will this put my marketplace account at risk?',
      answer: 'Every claim is compliant and white-hat, built to protect your account standing while pursuing every dollar owed.'
    }, {
      question: 'What data or account access does Margin Pro need?',
      answer: 'Margin Pro connects securely to your marketplace and carrier accounts to monitor for errors and file claims on your behalf.'
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      textAlign: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--tc-text-display-lg)',
      letterSpacing: 'var(--tc-tracking-display)'
    }
  }, "Your money is expiring."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-body-lg)',
      fontSize: 'var(--tc-size-body-lg)',
      color: 'var(--text-muted)'
    }
  }, "You earned the revenue. Don't let errors keep it from you."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('pricing')
  }, "Get My Free Audit"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body-sm)',
      color: 'var(--text-faint)'
    }
  }, "Only pay when we recover or save you money."))));
}
Object.assign(window, {
  MarginProPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/MarginProPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/PricingPage.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Tabs,
  SegmentedControl,
  PricingCard,
  CheckItem,
  Accordion,
  SectionHeading
} = window.ThreecoltsDesignSystem_802ae1;
const PLANS = {
  Reseller: [{
    name: 'Standard',
    audience: 'For independent resellers sourcing profitable products.',
    m: '$69',
    a: '$65',
    savings: 'Save $48/yr',
    feats: [['Full access to 10 tools', 1], ['Profit tracking & analytics', 1], ['1 user', 1], ['15% reimbursement commission', 1], ['Pro versions of all apps', 0]]
  }, {
    name: 'Teams',
    audience: 'For growing reseller businesses operating with a team.',
    m: '$129',
    a: '$119',
    savings: 'Save $120/yr',
    feats: [['Full access to 10 tools', 1], ['Profit tracking & analytics', 1], ['Up to 10 users', 1], ['15% reimbursement commission', 1], ['Pro versions of all apps', 0]]
  }, {
    name: 'Pro',
    audience: 'For high-volume resellers operating at scale.',
    m: '$199',
    a: '$183',
    savings: 'Save $192/yr',
    best: true,
    feats: [['Full access to 10 tools', 1], ['Premium support – <30min response', 1], ['Up to 10 users', 1], ['5% reimbursement commission', 1], ['Pro versions of all apps', 1]]
  }],
  Brands: [{
    name: 'Brands 1K',
    audience: 'For independent brand owners building their presence.',
    m: '$179',
    a: '$149',
    savings: 'Save $360/yr',
    feats: [['Full access to 5 tools', 1], ['Up to 1,000 multichannel orders/mo', 1], ['1 user', 1], ['15% reimbursement commission', 1], ['AI attribute mapping', 1]]
  }, {
    name: 'Brands 5K',
    audience: 'For growing brands expanding across catalog and channels.',
    m: '$599',
    a: '$499',
    savings: 'Save $1,200/yr',
    feats: [['Full access to 5 tools', 1], ['Up to 5,000 multichannel orders/mo', 1], ['Up to 3 users', 1], ['15% reimbursement commission', 1], ['AI attribute mapping', 1]]
  }, {
    name: 'Brands 10K',
    audience: 'For established brands operating at scale across marketplaces.',
    m: '$1,199',
    a: '$999',
    savings: 'Save $2,400/yr',
    best: true,
    feats: [['Full access to 5 tools', 1], ['Up to 10,000 multichannel orders/mo', 1], ['Up to 5 users', 1], ['5% reimbursement commission', 1], ['Premium support – <30min response', 1]]
  }]
};
function PricingPage() {
  const [product, setProduct] = React.useState('seller-365');
  const [audience, setAudience] = React.useState('Reseller');
  const [billing, setBilling] = React.useState('annual');
  const plans = PLANS[audience];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    compact: true,
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      textAlign: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--tc-text-display-xl)',
      letterSpacing: 'var(--tc-tracking-display)',
      maxWidth: '18ch'
    }
  }, "Pricing that fits how you run your business"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-body-lg)',
      fontSize: 'var(--tc-size-body-lg)',
      color: 'var(--text-muted)',
      maxWidth: '58ch'
    }
  }, "Select a product and see what works for your scale, from your first tools to a custom setup.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: product,
    onChange: setProduct,
    items: [{
      value: 'seller-365',
      label: 'Seller 365',
      description: 'Scale your business with one subscription.',
      icon: /*#__PURE__*/React.createElement(ProductMark, {
        name: "Seller 365",
        size: 24
      })
    }, {
      value: 'margin-pro',
      label: 'Margin Pro',
      description: 'Recover lost margin, across every channel.',
      icon: /*#__PURE__*/React.createElement(ProductMark, {
        name: "Margin Pro",
        size: 24
      })
    }, {
      value: 'unicon',
      label: 'UniCon',
      description: 'Sync your entire catalog to major marketplaces.',
      icon: /*#__PURE__*/React.createElement(ProductMark, {
        name: "UniCon",
        size: 24
      })
    }, {
      value: 'retail-365',
      label: 'Retail 365',
      description: 'One connected view of your Amazon Vendor P&L.',
      icon: /*#__PURE__*/React.createElement(ProductMark, {
        name: "Retail 365",
        size: 24
      }),
      badge: /*#__PURE__*/React.createElement(Badge, {
        size: "sm"
      }, "Coming soon"),
      disabled: true
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    style: {
      paddingTop: 40
    }
  }, product === 'seller-365' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-label)',
      color: 'var(--text-muted)'
    }
  }, "Choose your bundle:"), /*#__PURE__*/React.createElement(SegmentedControl, {
    value: audience,
    onChange: setAudience,
    options: ['Reseller', 'Brands']
  })), /*#__PURE__*/React.createElement(SegmentedControl, {
    value: billing,
    onChange: setBilling,
    options: [{
      value: 'monthly',
      label: 'Monthly'
    }, {
      value: 'annual',
      label: 'Annual',
      badge: 'SAVE'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      alignItems: 'start'
    }
  }, plans.map(p => /*#__PURE__*/React.createElement(PricingCard, {
    key: p.name,
    name: p.name,
    icon: /*#__PURE__*/React.createElement(ProductMark, {
      name: p.name,
      size: 24
    }),
    audience: p.audience,
    priceMonthly: p.m,
    priceAnnual: billing === 'annual' ? p.a : undefined,
    savings: billing === 'annual' ? p.savings : undefined,
    highlight: !!p.best,
    footnote: "14-day free trial. 7 days instantly, plus 7 more when you connect your Amazon Seller Pro account."
  }, p.feats.map(([t, on]) => /*#__PURE__*/React.createElement(CheckItem, {
    key: t,
    state: on ? 'included' : 'excluded'
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    tone: "wash",
    style: {
      display: 'grid',
      gap: 12,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--tc-text-h3)'
    }
  }, "Multichannel"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Selling beyond Amazon? Add UniCon to any plan. Sync the catalog, inventory, and orders you already run to the marketplaces that matter most."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Start free trial"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "From ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "$49/mo"), ", added to any plan"))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    tone: "inverse",
    style: {
      display: 'grid',
      gap: 12,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--tc-text-h3)',
      color: 'var(--tc-white)'
    }
  }, "Enterprise"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-body-sm)',
      color: 'rgba(255,255,255,0.68)'
    }
  }, "More than 10 users, or need custom terms? We'll build the plan around your team."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "inverse"
  }, "Talk to sales"))))), product === 'margin-pro' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Success-based"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--tc-text-display-lg)',
      fontSize: 'var(--tc-size-display-md)',
      letterSpacing: 'var(--tc-tracking-display)'
    }
  }, "No upfront fees."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-body-lg)',
      fontSize: 'var(--tc-size-body-lg)',
      color: 'var(--text-muted)'
    }
  }, "Only pay when we recover or save you money."), /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Get A Free Audit"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body-sm)',
      color: 'var(--text-faint)'
    }
  }, "Zero risk. No hidden platform fees.")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'grid',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-overline)',
      letterSpacing: 'var(--tc-tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "What you get"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(CheckItem, null, "Recover 1\u20135% of marketplace revenue"), /*#__PURE__*/React.createElement(CheckItem, null, "Cut parcel carrier costs by 15\u201330%"), /*#__PURE__*/React.createElement(CheckItem, null, "AI catches every error as it happens"), /*#__PURE__*/React.createElement(CheckItem, null, "Over $1 billion recovered for customers")))), product === 'unicon' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(PricingCard, {
    name: "Growth",
    icon: /*#__PURE__*/React.createElement(ProductMark, {
      name: "UniCon",
      size: 24
    }),
    audience: "Get up and running fast with guided onboarding \u2014 every core feature included from day one.",
    priceMonthly: "$99",
    ctaLabel: "See Plans",
    footnote: "No revenue share. All marketplaces included."
  }, /*#__PURE__*/React.createElement(CheckItem, null, "Launch new marketplaces in days"), /*#__PURE__*/React.createElement(CheckItem, null, "Real-time inventory synchronization"), /*#__PURE__*/React.createElement(CheckItem, null, "Standardize catalog and order workflows")), /*#__PURE__*/React.createElement(PricingCard, {
    name: "Enterprise",
    icon: /*#__PURE__*/React.createElement(ProductMark, {
      name: "Enterprise",
      size: 24
    }),
    audience: "A tailored build with a dedicated team that handles setup, scaling and support.",
    priceMonthly: "Scalable Rates",
    period: "",
    ctaLabel: "Book A Strategy Call",
    footnote: "Enterprise-grade support included."
  }, /*#__PURE__*/React.createElement(CheckItem, null, "Dedicated integration team"), /*#__PURE__*/React.createElement(CheckItem, null, "Role-based access across brands"), /*#__PURE__*/React.createElement(CheckItem, null, "Holds at 100K+ SKUs")))), /*#__PURE__*/React.createElement(Section, {
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--tc-container-narrow)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    title: "Frequently asked questions",
    size: "md",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: 0,
    items: [{
      question: 'What does this help me do day to day?',
      answer: 'Seller 365 runs your whole workflow — sourcing, listing, repricing, feedback, and profit tracking — from one account instead of a stack of separate logins.'
    }, {
      question: 'How much does it cost?',
      answer: 'Reseller plans start at $69/month, Brand plans at $179/month. Every plan includes full access to all tools for your model — the difference between tiers is scale (seats, limits, support), not features.'
    }, {
      question: 'How do I get started?',
      answer: 'Start your free trial directly from this page — no sales call required. You will get 7 days instantly, with 7 more unlocked when you connect your Amazon Seller Pro account.'
    }, {
      question: 'What happens if I go over my plan\'s limits?',
      answer: 'You will get a heads-up before you hit a cap, and can upgrade to the next tier at any point. There is no service interruption or hard cutoff.'
    }]
  }))));
}
Object.assign(window, {
  PricingPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/PricingPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ProofPages.jsx
try { (() => {
const {
  Button,
  Card,
  Stat,
  Avatar,
  TestimonialCard,
  SectionHeading,
  RatingBadge,
  LogoMarquee
} = window.ThreecoltsDesignSystem_802ae1;
const REVIEWS = [['The full Seller 365 suite has seriously streamlined my workflow — repricing is automated, listing is easy, and my average selling price has gone up 7%.', 'Rodger White', 'Amazon Seller'], ['I really love the all-in-one package of programs, which makes Amazon selling so much simpler. Thank you Threecolts!', 'C Barnett', 'Amazon Seller'], ['Since discovering Tactical Arbitrage and InventoryLab, now part of the Seller 365 bundle, our Amazon business has completely transformed.', 'Chris Grant', 'Amazon Seller'], ['The platform took me from logging into 4 different vendors to one website which made life a ton easier.', 'Sakib J.', 'Vice President'], ['Tactical Arbitrage AI matching is absolutely amazing. Helped me a lot to grow my Amazon business.', 'Uras M.', 'Senior Machine Learning Engineer'], ['We found that Seller 365 was way better and faster than our in-house team.', 'Blaze Kilian', 'Amazon Seller'], ['Inventory Lab helps us keep clear track of our P&L, inventory levels, and creating Amazon shipments.', 'Nicholas G.', 'Owner, Small Business'], ['I have had a great experience with all their tools since 2019. Now it is a no brainer.', 'Stephen', 'Amazon Seller'], ['The suite of tools has significantly streamlined our processes. We have seen a noticeable boost in productivity and profitability.', 'Serdar G.', 'Consumer Goods, Small Business']];
function WallOfLovePage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    compact: true,
    style: {
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      textAlign: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-overline)',
      letterSpacing: 'var(--tc-tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Reviews"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--tc-text-display-xl)',
      letterSpacing: 'var(--tc-tracking-display)',
      maxWidth: '20ch'
    }
  }, "Sellers who've made the switch don't go back."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(RatingBadge, {
    source: "Trustpilot",
    score: "4.5"
  }), /*#__PURE__*/React.createElement(RatingBadge, {
    source: "G2",
    score: "4.9"
  }), /*#__PURE__*/React.createElement(RatingBadge, {
    source: "Shopify",
    score: "4.6"
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      columns: 3,
      columnGap: 20
    }
  }, REVIEWS.map(([q, n, r]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      breakInside: 'avoid',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: q,
    name: n,
    role: r
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Read More Reviews"))));
}
function CaseStudyPage({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "inverse",
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 28,
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-overline)',
      letterSpacing: 'var(--tc-tracking-overline)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "Case study \xB7 Acquco"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--tc-text-display-lg)',
      letterSpacing: 'var(--tc-tracking-display)',
      color: 'var(--tc-white)'
    }
  }, "\u201CProtecting margin is a continuous discipline, not a one-time initiative.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Wiley Zhang",
    tone: "gradient"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-label)',
      color: 'var(--tc-white)'
    }
  }, "Wiley Zhang"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body-sm)',
      fontSize: 'var(--tc-size-caption)',
      color: 'rgba(255,255,255,0.55)'
    }
  }, "COO, Acquco"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      flexWrap: 'wrap',
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "$3M+",
    label: "Total recovered"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "$2M",
    label: "Marketplace yield"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "Minimal",
    label: "Internal effort"
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Margin leakage piled up as Acquco scaled.",
    size: "md"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-body-lg)',
      fontSize: 'var(--tc-size-body-lg)',
      color: 'var(--text-muted)'
    }
  }, "As Acquco scaled across channels and geographies, margin leakage piled up across marketplace fees, inventory discrepancies, and international shipping contracts."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-body-lg)',
      fontSize: 'var(--tc-size-body-lg)',
      color: 'var(--text-muted)'
    }
  }, "Margin Pro recovered the fees and discrepancies automatically, renegotiated the shipping contracts, and optimized supplier yield."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('pricing')
  }, "Get My Free Audit"))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    tone: "sunken",
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-overline)',
      letterSpacing: 'var(--tc-tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "At a glance"), [['Industry', 'Aggregator / multi-brand'], ['Channels', 'Amazon, Walmart, international'], ['Services', '3P reimbursements, carrier optimization'], ['Internal lift', '< 1 hr / week']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gap: 2,
      paddingBottom: 12,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body-sm)',
      fontSize: 'var(--tc-size-caption)',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-label)',
      color: 'var(--text-strong)'
    }
  }, v)))))));
}
Object.assign(window, {
  WallOfLovePage,
  CaseStudyPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ProofPages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/SiteChrome.jsx
try { (() => {
const {
  Button,
  Badge,
  Logo,
  RatingBadge
} = window.ThreecoltsDesignSystem_802ae1;
const A = '../../assets/logos';
const PRODUCTS = [{
  key: 'margin-pro',
  name: 'Margin Pro',
  desc: 'Find and recover margin lost to deductions, fees, and overcharges.'
}, {
  key: 'unicon',
  name: 'UniCon',
  desc: 'Launch and manage your catalog on major marketplaces.'
}, {
  key: 'seller-365',
  name: 'Seller 365',
  desc: 'Run your entire seller operation with ten tools in one subscription.'
}, {
  key: 'onsite',
  name: 'Onsite Support',
  desc: 'Turn every support ticket into an operational workspace.'
}, {
  key: 'ai-operator',
  name: 'AI Operator',
  desc: 'Automate routine seller operations with an always-on AI teammate.',
  soon: true
}, {
  key: 'retail-365',
  name: 'Retail 365',
  desc: 'One connected view of your Amazon Vendor P&L.',
  soon: true
}];

/* Product marks were not included in the uploaded assets — a neutral initial tile stands in.
   Swap for the real <img src=".../margin-pro-icon.svg"> once supplied. */
function ProductMark({
  name,
  size = 28
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flex: '0 0 auto',
      borderRadius: Math.round(size * 0.28),
      background: 'var(--tc-ink-100)',
      color: 'var(--tc-ink-600)',
      border: '1px dashed var(--tc-ink-300)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--tc-font-display)',
      fontWeight: 800,
      fontSize: Math.round(size * 0.42)
    },
    title: name + ' icon — asset pending"'
  }, name.charAt(0));
}
function Nav({
  page,
  go
}) {
  const [open, setOpen] = React.useState(false);
  const link = (label, target) => /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setOpen(false);
      go(target);
    },
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      padding: '8px 2px',
      font: 'var(--tc-text-label)',
      color: page === target ? 'var(--text-strong)' : 'var(--text-body)'
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--tc-nav-height)',
      background: 'var(--surface-glass)',
      backdropFilter: 'var(--tc-blur-glass)',
      WebkitBackdropFilter: 'var(--tc-blur-glass)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--tc-container-max)',
      margin: '0 auto',
      padding: '0 var(--tc-gutter)',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('margin-pro'),
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "logo-mono-dark",
    height: 24,
    base: A
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      padding: '8px 2px',
      font: 'var(--tc-text-label)',
      color: 'var(--text-body)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "Products ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 9,
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--tc-duration-fast) var(--tc-ease-standard)'
    }
  }, "\u25BC")), link('Solutions', 'margin-pro'), link('Resources', 'wall-of-love'), link('Pricing', 'pricing')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Log In"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go('pricing')
  }, "Get Started")))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      boxShadow: 'var(--tc-shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--tc-container-max)',
      margin: '0 auto',
      padding: '24px var(--tc-gutter) 28px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.key,
    disabled: p.soon,
    onClick: () => {
      setOpen(false);
      go(p.key === 'margin-pro' ? 'margin-pro' : 'margin-pro');
    },
    style: {
      textAlign: 'left',
      border: '1px solid transparent',
      borderRadius: 'var(--tc-radius-md)',
      padding: 14,
      background: 'transparent',
      cursor: p.soon ? 'default' : 'pointer',
      display: 'flex',
      gap: 12,
      opacity: p.soon ? 0.6 : 1
    }
  }, /*#__PURE__*/React.createElement(ProductMark, {
    name: p.name
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--tc-text-label)',
      color: 'var(--text-strong)'
    }
  }, p.name, p.soon && /*#__PURE__*/React.createElement(Badge, {
    size: "sm"
  }, "Coming soon")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-body-sm)',
      fontSize: 'var(--tc-size-caption)',
      color: 'var(--text-muted)'
    }
  }, p.desc)))))));
}
function TrustStrip() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: '18px 0'
    }
  }, /*#__PURE__*/React.createElement(RatingBadge, {
    source: "Trustpilot",
    score: "4.5"
  }), /*#__PURE__*/React.createElement(RatingBadge, {
    source: "G2",
    score: "4.9"
  }), /*#__PURE__*/React.createElement(RatingBadge, {
    source: "Shopify",
    score: "4.6"
  }));
}
function Footer({
  go
}) {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--tc-text-overline)',
      letterSpacing: 'var(--tc-tracking-overline)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)'
    }
  }, title), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: 'var(--tc-text-body-sm)',
      color: 'rgba(255,255,255,0.78)'
    }
  }, i)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'rgba(255,255,255,0.78)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--tc-container-max)',
      margin: '0 auto',
      padding: '64px var(--tc-gutter) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "logo-mono-light",
    height: 24,
    base: A
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--tc-text-body-sm)',
      color: 'rgba(255,255,255,0.55)',
      maxWidth: '30ch'
    }
  }, "The connected e-commerce software platform.")), col('Products', ['Margin Pro', 'UniCon', 'Seller 365', 'Onsite Support']), col('Solutions', ['1P Vendors', '3P Sellers', 'Wholesale', 'Brands']), col('Resources', ['Blog', 'Podcasts', 'Knowledge Base', 'Threecolts University']), col('Company', ['About Us', 'Careers', 'Seller Advocacy', 'Wall of Love'])), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      font: 'var(--tc-text-body-sm)',
      fontSize: 'var(--tc-size-caption)',
      color: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "System status"), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Threecolts. All rights reserved."))));
}
function Section({
  children,
  tone = 'page',
  compact = false,
  style
}) {
  const bg = {
    page: 'var(--surface-page)',
    card: 'var(--surface-card)',
    inverse: 'var(--surface-inverse)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: (compact ? 'var(--tc-section-y-compact)' : 'var(--tc-section-y)') + ' 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--tc-container-max)',
      margin: '0 auto',
      padding: '0 var(--tc-gutter)'
    }
  }, children));
}
Object.assign(window, {
  Nav,
  Footer,
  Section,
  TrustStrip,
  ProductMark,
  PRODUCTS,
  ASSETS: A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CheckItem = __ds_scope.CheckItem;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.LogoMarquee = __ds_scope.LogoMarquee;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.RatingBadge = __ds_scope.RatingBadge;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

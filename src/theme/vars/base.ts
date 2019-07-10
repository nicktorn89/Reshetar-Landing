import colors from './colors/__palette';
import purple from './colors/purple';

export const deviceSizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

const rythm = 16;
const font_size = 16;
const success = colors.$green300;
const failure = colors.$red500;

const base = {
  $font_family: 'Avenir Next Cyr, sans-serif',
  $font_family_demibold: 'Avenir Next Cyr Demi, sans-serif',
  $font_size_base: font_size,
  $font_size_sm: font_size * 0.75,
  $font_weight_base: 400,
  $font_weight_semibold: 500,
  $font_weight_bold: 700,

  $rythm: rythm,

  // --- BACKGROUND -------------------------------------------------------------------------------
  $bg: colors.$white,
  $bg_alt: colors.$gray100,
  $bg_transparent: colors.$transparent,
  $disabled_bg: colors.$gray200,
  $error_bg: colors.$red100,
  $error_bg_alt: colors.$red200,
  $header_bg: colors.$purple700,
  $form_bg: colors.$gray000,

  // --- HEIGHT -----------------------------------------------------------------------------------
  $height_base: 48,
  $height_sm: 32,

  // --- TEXT -------------------------------------------------------------------------------------
  $text_color: colors.$white,
  $text_color_black: colors.$black,
  $text_color_alt: colors.$purple400,
  $text_color_disabled: colors.$gray400,
  $text_color_error: failure,
  $text_background_color: colors.$orange400,

  // --- TRANSITION -------------------------------------------------------------------------------
  $transition_duration_base: 0.3,
  $transition_function_base: 'ease',

  // --- BORDER -----------------------------------------------------------------------------------
  $border_radius_base: 4,
  $border_radius_sm: 2,
  $border_width_base: 2,
  $border_color: colors.$gray300,
  $price_item_border: colors.$gray500,

  // --- BUTTON -----------------------------------------------------------------------------------
  $btn_success_bg: success,
  $btn_success_color: colors.$gray800,
  $btn_shadow: `0 ${rythm / 4}px ${rythm}px 0`,
  $btn_font_size_base: font_size * 1.15,
  $btn_font_size_sm: font_size * 0.85,
  $btn_icon_active: colors.$purple400,
  $btn_icon_disabled: colors.$gray300,

  // --- NAVIGATION -------------------------------------------------------------------------------
  $navigation_width: rythm * 5,
  $sidebar_width: rythm * 24,

  // --- SELECT -----------------------------------------------------------------------------------
  $select_base_bg: colors.$white,

  // --- INPUT ------------------------------------------------------------------------------------
  $input_base_bg: colors.$white,

  // --- TABLE -------------------------------------------------------------------------------------
  $table_base_bg: colors.$gray100,
  $table_border_color: colors.$gray100,

  // --- TABLE / PRODUCT_IMAGE ---------------------------------------------------------------------
  $product_image_bg_base: colors.$gray100,
  $product_image_bg_alt: colors.$gray200,

  // --- TABS ---------------------------------------------------------------------
  $tabs_header_bg: colors.$gray100,
  $tabs_item_border_width: 4,
  $tabs_item_border_color_hovered: colors.$gray300,

  // --- RATE --------------------------------------------------------------------------------------
  $rate_block_bg: colors.$purple400,

  // --- ACCORDION -----------------------------------------------------------------------------------
  $accordion_border: colors.$gray700,
  $accordion_slider_border: colors.$gray600,

  // --- ORDERBLOCK -----------------------------------------------------------------------------------
  $order_block_heading: colors.$gray800,

  // --- SCROLLBAR -----------------------------------------------------------------------------------
  $scrollbar: colors.$gray300,
  $scrollbar_hover: colors.$gray400,

  // --- SPINNER -----------------------------------------------------------------------------------
  $spinner_color: colors.$gray800,

  // --- MAX-WIDTH ----------------------------------------------------------------------------------
  $phone: `screen and (max-width: ${deviceSizes.tablet - 1}px)`,
  $tablet: `screen and (max-width: ${deviceSizes.desktop - 1}px)`,

  ...purple,
};

export default base;

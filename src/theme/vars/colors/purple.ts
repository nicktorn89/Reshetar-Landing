import colors from './__palette';

const purple = {
  $main_color: 'purple',
  $accent: colors.$purple500,

  // --- BACKGROUND -------------------------------------------------------------------------------
  $tile_bg_selected: colors.$purple100,

  // --- HEIGHT -----------------------------------------------------------------------------------
  $height_base: 48,
  $height_sm: 32,

  // --- TEXT -------------------------------------------------------------------------------------
  $text_color_accent: colors.$purple900,

  // --- ANCHOR -----------------------------------------------------------------------------------
  $anchor_color_hover: colors.$white,
  $anchor_color: colors.$red300,

  // --- BORDER -----------------------------------------------------------------------------------
  $border_color_tile: colors.$purple300,
  $block_border_color: colors.$gray200,
  $price_item_border: colors.$gray500,

  // --- BUTTON -----------------------------------------------------------------------------------
  $btn_base_bg: colors.$green200,
  $btn_primary_bg: colors.$purple400,
  $btn_base_fc: colors.$white,
  $btn_primary_fc: colors.$white,
  $btn_icon_active: colors.$purple400,
  $btn_icon_disabled: colors.$gray300,

  // --- HEADER -----------------------------------------------------------------------------------
  $header_accent_text_color: colors.$purple600,

  // --- PAGINATION -------------------------------------------------------------------------------
  $pgn_base_bg: colors.$purple200,
  $pgn_selected_bg:  colors.$purple600,
  $pgn_base_fc: colors.$purple900,
  $pgn_selected_fc: colors.$white,

  // --- NAVIGATION -------------------------------------------------------------------------------
  $navigation_bg: colors.$purple400,

  // --- SELECT -----------------------------------------------------------------------------------
  $select_border_color: colors.$gray300,
  $select_option_bg: colors.$gray300,
  $select_indicator_bg: colors.$transparent,
  $select_indicator_color: colors.$purple800,

  // --- INPUT ------------------------------------------------------------------------------------
  $input_prefix_bg: colors.$purple300,
  $input_suffix_bg: colors.$purple300,
  $input_border_color: colors.$gray300,

  // --- TOOLTIP -----------------------------------------------------------------------------------
  $tooltip_bg: colors.$purple100,

  // --- TABLE / PRODUCT_IMAGE ---------------------------------------------------------------------
  $product_image_border_accent: colors.$purple600,

  // --- TABS --------------------------------------------------------------------------------------
  $tabs_item_border_color: colors.$gray300,
  $tabs_bg_color: colors.$white,
  $tabs_bg_active_color: colors.$purple400,
  $tabs_text_active_color: colors.$white,

  // --- RATE --------------------------------------------------------------------------------------
  $rate_block_bg: colors.$purple400,

  // --- PRICE -------------------------------------------------------------------------------------
  $price_item_bg: colors.$gray000,

  // --- CALCULATOR LOGO  --------------------------------------------------------------------------
  $calculator_logo_color_0: colors.$purple300,
  $calculator_logo_color_1: colors.$purple600,

  // --- RECOMMENDATION  ---------------------------------------------------------------------------
  $recommendation_index_color: colors.$white,

  // --- CIRCLE ------------------------------------------------------------------------------------
  $circle_bg_1: colors.$purple200,
  $circle_bg_2: colors.$purple100,
  $circle_bg_3: colors.$purple000,
};

export default purple;

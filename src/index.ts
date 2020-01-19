import { oneOfType, string, number, oneOf } from 'prop-types';
import { CSSObject } from 'styled-components';
import * as CSS from 'csstype';

export const compose = <P extends {}>(
  ...args: ((p: P) => CSSObject)[]
): ((p: P) => CSSObject) => {
  return props => {
    return args.reduce((acc, arg) => {
      const styles = arg(props);
      Object.keys(styles).forEach(key => {
        const value = styles[key];
        if (value !== undefined && value !== null) {
          acc[key] = value;
        }
      });
      return acc;
    }, {});
  };
};

export const combine = <
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P8,
  P9,
  P10,
  P11,
  P12,
  P13,
  P14,
  P15
>(
  p1: (p: P1) => FlattenSimpleInterpolation,
  p2: (p: P2) => FlattenSimpleInterpolation,
  p3?: (p: P3) => FlattenSimpleInterpolation,
  p4?: (p: P4) => FlattenSimpleInterpolation,
  p5?: (p: P5) => FlattenSimpleInterpolation,
  p6?: (p: P6) => FlattenSimpleInterpolation,
  p7?: (p: P7) => FlattenSimpleInterpolation,
  p8?: (p: P8) => FlattenSimpleInterpolation,
  p9?: (p: P9) => FlattenSimpleInterpolation,
  p10?: (p: P10) => FlattenSimpleInterpolation,
  p11?: (p: P11) => FlattenSimpleInterpolation,
  p12?: (p: P12) => FlattenSimpleInterpolation,
  p13?: (p: P13) => FlattenSimpleInterpolation,
  p14?: (p: P14) => FlattenSimpleInterpolation,
  p15?: (p: P15) => FlattenSimpleInterpolation,
) => {
  const atomics = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
  ].filter(Boolean);
  return (
    props: P1 &
      P2 &
      P3 &
      P4 &
      P5 &
      P6 &
      P7 &
      P8 &
      P9 &
      P10 &
      P11 &
      P12 &
      P13 &
      P14 &
      P15,
  ) => {
    return atomics
      .map(atomic => atomic(props))
      .flat(1)
      .filter(Boolean);
  };
};

type Aliases = {
  p?: CSSObject['padding'];
  pl?: CSSObject['paddingLeft'];
  pr?: CSSObject['paddingRight'];
  pt?: CSSObject['paddingTop'];
  pb?: CSSObject['paddingBottom'];
  ph?: CSSObject['paddingLeft'];
  paddingHorizontal?: CSSObject['paddingLeft'];
  pv?: CSSObject['paddingTop'];
  paddingVertical?: CSSObject['paddingTop'];
  m?: CSSObject['margin'];
  ml?: CSSObject['marginLeft'];
  mr?: CSSObject['marginRight'];
  mt?: CSSObject['marginTop'];
  mb?: CSSObject['marginBottom'];
  o?: CSSObject['opacity'];
  d?: CSSObject['display'];
  w?: CSSObject['width'];
  h?: CSSObject['height'];
  direction?: CSSObject['flexDirection'];
  align?: CSSObject['alignItems'];
  justify?: CSSObject['justifyContent'];
  wrap?: CSSObject['flexWrap'];
  grow?: CSSObject['flexGrow'];
  shrink?: CSSObject['flexShrink'];
  basis?: CSSObject['flexBasis'];
  flow?: CSSObject['flexFlow'];
  area?: CSSObject['gridArea'];
  autoColumns?: CSSObject['gridAutoColumns'];
  autoFlow?: CSSObject['gridAutoFlow'];
  autoRows?: CSSObject['gridAutoRows'];
  columnEnd?: CSSObject['gridColumnEnd'];
  columnGap?: CSSObject['gridColumnGap'];
  columnStart?: CSSObject['gridColumnStart'];
  column?: CSSObject['gridColumn'];
  gap?: CSSObject['gridGap'];
  rowEnd?: CSSObject['gridRowEnd'];
  rowGap?: CSSObject['gridRowGap'];
  rowStart?: CSSObject['gridRowStart'];
  row?: CSSObject['gridRow'];
  areas?: CSSObject['gridTemplateAreas'];
  columns?: CSSObject['gridTemplateColumns'];
  rows?: CSSObject['gridTemplateRows'];
  template?: CSSObject['gridTemplate'];
  c?: CSSObject['color'];
  bg?: CSSObject['background'];
};

type AtomicCSSObject = CSSObject & Aliases;

const aliases: { [key in keyof CSSObject]: keyof Aliases } = {
  padding: 'p',
  paddingLeft: 'pl',
  paddingRight: 'pr',
  paddingTop: 'pt',
  paddingBottom: 'pb',
  margin: 'm',
  marginLeft: 'ml',
  marginRight: 'mr',
  marginTop: 'mt',
  marginBottom: 'mb',
  opacity: 'o',
  display: 'd',
  width: 'w',
  height: 'h',
  flexDirection: 'direction',
  alignItems: 'align',
  justifyContent: 'justify',
  flexWrap: 'wrap',
  flexGrow: 'grow',
  flexShrink: 'shrink',
  flexBasis: 'basis',
  flexFlow: 'flow',
  gridArea: 'area',
  gridAutoColumns: 'autoColumns',
  gridAutoFlow: 'autoFlow',
  gridAutoRows: 'autoRows',
  gridColumnEnd: 'columnEnd',
  gridColumnGap: 'columnGap',
  gridColumnStart: 'columnStart',
  gridColumn: 'column',
  gridGap: 'gap',
  gridRowEnd: 'rowEnd',
  gridRowGap: 'rowGap',
  gridRowStart: 'rowStart',
  gridRow: 'row',
  gridTemplateAreas: 'areas',
  gridTemplateColumns: 'columns',
  gridTemplateRows: 'rows',
  gridTemplate: 'template',
  background: 'bg',
  color: 'c',
};

export type ThemedProps<T> = { theme: T };

export type ThemeAccessor<T = {}, P extends ThemedProps<T> = { theme: T }> = (
  props: P,
) => T[keyof T];

const isThemeAccessor = <T = {}, P extends { theme: T } = { theme: T }>(
  candidate: unknown,
): candidate is ThemeAccessor<T, P> => {
  return typeof candidate === 'function';
};

const hasTheme = <T = {}>(props: any): props is ThemedProps<T> => {
  return typeof props.theme === 'object';
};

const getProperty = <P extends AtomicCSSObject>(
  props: P,
  name: keyof CSSObject,
) => {
  const alias = aliases[name];
  const variable = props[name] || (alias && props[alias]);
  if (typeof variable === 'object') {
    throw new Error(`getProperty does not support nested objects.`);
  }
  if (isThemeAccessor(variable)) {
    if (!hasTheme(props)) {
      throw new Error(
        `getProperty tried to access props.theme and got undefined. Try adding a ThemeProvider.`,
      );
    }
    return variable(props);
  }
  return variable;
};

const toPx = (value?: string | number): string | undefined =>
  typeof value === 'undefined'
    ? undefined
    : typeof value === 'string'
    ? value
    : `${value}px`;

export const base = <P extends ThemedProps<any> = ThemedProps<any>>(
  css: AtomicCSSObject,
): ((p: P) => FlattenSimpleInterpolation) => {
  return props => {
    const properties: CSSObject = Object.keys(css).reduce((obj, key) => {
      const property = getProperty({ ...props, ...css }, key);
      return { ...obj, [key]: property };
    }, {});
    return interpolate(properties);
  };
};

export const variant = <
  V extends string,
  P extends ThemedProps<any> & { variant: V } = { variant: V; theme: any }
>(
  name: V,
  css: AtomicCSSObject,
): ((p: P) => FlattenSimpleInterpolation) => {
  return props => {
    if (props.variant === name) {
      return base(css)(props);
    }
    return [];
  };
};

export const is = <K, P extends { [key: K]: string } & ThemedProps<any>>(
  name: keyof P,
  css: CSSObject,
): ((p: P) => FlattenSimpleInterpolation) => {
  return props => {
    if (props[name]) {
      return base(css)(props);
    }
    return [];
  };
};

const globalsNumberType = oneOfType([
  number,
  // This looks weird but it's the only way to make TS happy with inferred propTypes
  oneOf<CSS.GlobalsNumber>([
    '-moz-initial',
    'inherit',
    'initial',
    'revert',
    'unset',
  ]),
]);

export type SpacingProps = Partial<
  Pick<
    AtomicCSSObject,
    | 'p'
    | 'padding'
    | 'pl'
    | 'paddingLeft'
    | 'pr'
    | 'paddingRight'
    | 'pt'
    | 'paddingTop'
    | 'pb'
    | 'paddingBottom'
    | 'ph'
    | 'paddingHorizontal'
    | 'pv'
    | 'paddingVertical'
    | 'margin'
    | 'm'
    | 'marginLeft'
    | 'ml'
    | 'marginRight'
    | 'mr'
    | 'marginTop'
    | 'mt'
    | 'marginBottom'
    | 'mb'
    | 'mh'
    | 'marginHorizontal'
    | 'mv'
    | 'marginVertical'
  >
>;

export const spacingPropTypes = {
  margin: oneOfType([string, number]),
  m: oneOfType([string, number]),
  marginLeft: oneOfType([string, number]),
  ml: oneOfType([string, number]),
  marginRight: oneOfType([string, number]),
  mr: oneOfType([string, number]),
  marginTop: oneOfType([string, number]),
  mt: oneOfType([string, number]),
  marginBottom: oneOfType([string, number]),
  mb: oneOfType([string, number]),
  padding: oneOfType([string, number]),
  p: oneOfType([string, number]),
  paddingLeft: oneOfType([string, number]),
  pl: oneOfType([string, number]),
  paddingRight: oneOfType([string, number]),
  pr: oneOfType([string, number]),
  paddingTop: oneOfType([string, number]),
  pt: oneOfType([string, number]),
  paddingBottom: oneOfType([string, number]),
  pb: oneOfType([string, number]),
};

export const spacing = <P extends SpacingProps>(props: P) => {
  const padding = props?.padding ?? props?.p;
  const paddingTop =
    props?.paddingVertical ?? props?.pv ?? props?.paddingTop ?? props?.pt;
  const paddingBottom =
    props?.paddingVertical ?? props?.pv ?? props?.paddingBottom ?? props?.pb;
  const paddingLeft =
    props?.paddingHorizontal ?? props?.ph ?? props?.paddingLeft ?? props?.pl;
  const paddingRight =
    props?.paddingHorizontal ?? props?.ph ?? props?.paddingRight ?? props?.pr;
  const margin = props?.margin ?? props?.m;
  const marginTop =
    props?.marginVertical ?? props?.mv ?? props?.marginTop ?? props?.mt;
  const marginBottom =
    props?.marginVertical ?? props?.mv ?? props?.marginBottom ?? props?.mb;
  const marginLeft =
    props?.marginHorizontal ?? props?.mh ?? props?.marginLeft ?? props?.ml;
  const marginRight =
    props?.marginHorizontal ?? props?.mh ?? props?.marginRight ?? props?.mr;
  return {
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  };
};

export type OpacityProps = {
  opacity?: CSS.OpacityProperty;
  o?: CSS.OpacityProperty;
};

export const opacityPropTypes = {
  opacity: oneOfType([string, number]),
  o: oneOfType([string, number]),
};

export const opacity = <P extends OpacityProps>(props: P) => {
  const opacity = getProperty(props, 'opacity');
  return interpolate({ opacity });
};

export type DisplayProps = {
  display?: CSS.DisplayProperty;
  d?: CSS.DisplayProperty;
};

export const displayPropTypes = {
  display: string,
  d: string,
};

export const display = <P extends DisplayProps>(props: P) => {
  const display = getProperty(props, 'display');
  return interpolate({ display });
};

export type SizeProps = {
  width?: number | string;
  w?: number | string;
  height?: number | string;
  h?: number | string;
};

export const sizePropTypes = {
  width: oneOfType([number, string]),
  w: oneOfType([number, string]),
  height: oneOfType([number, string]),
  h: oneOfType([number, string]),
};

export const size = <P extends SizeProps>(props: P) => {
  const width = toPx(getProperty(props, 'width'));
  const height = toPx(getProperty(props, 'height'));
  return interpolate({ width, height });
};

export type FlexProps = {
  flex?: CSS.FlexProperty<string | number>;
  order?: CSS.GlobalsNumber;
  flexDirection?: CSS.FlexDirectionProperty;
  direction?: CSS.FlexDirectionProperty;
  alignItems?: CSS.AlignItemsProperty;
  align?: CSS.AlignItemsProperty;
  justifyContent?: CSS.JustifyContentProperty;
  justify?: CSS.JustifyContentProperty;
  flexWrap?: CSS.FlexWrapProperty;
  wrap?: CSS.FlexWrapProperty;
  flexGrow?: CSS.GlobalsNumber;
  grow?: CSS.GlobalsNumber;
  flexShrink?: CSS.GlobalsNumber;
  shrink?: CSS.GlobalsNumber;
  flexBasis?: CSS.FlexBasisProperty<string | number>;
  basis?: CSS.FlexBasisProperty<string | number>;
  alignContent?: CSS.AlignContentProperty;
  flexFlow?: CSS.FlexFlowProperty;
  flow?: CSS.FlexFlowProperty;
};

const flexDirectionType = oneOf<CSS.FlexDirectionProperty>([
  '-moz-initial',
  'inherit',
  'initial',
  'revert',
  'unset',
  'column',
  'column-reverse',
  'row',
  'row-reverse',
]);

const flexWrapType = oneOf<CSS.FlexWrapProperty>([
  'wrap',
  '-moz-initial',
  'inherit',
  'initial',
  'revert',
  'unset',
  'nowrap',
  'wrap-reverse',
]);

export const flexPropTypes = {
  flex: oneOfType([string, number]),
  order: globalsNumberType,
  flexDirection: flexDirectionType,
  direction: flexDirectionType,
  alignItems: string,
  align: string,
  justifyContent: string,
  justify: string,
  flexWrap: flexWrapType,
  wrap: flexWrapType,
  flexGrow: globalsNumberType,
  grow: globalsNumberType,
  flexShrink: globalsNumberType,
  shrink: globalsNumberType,
  flexBasis: string,
  basis: oneOfType([string, number]),
  alignContent: string,
  flexFlow: string,
  flow: string,
};

export const flex = <P extends FlexProps>(props: P) => {
  const flex = getProperty(props, 'flex');
  const order = getProperty(props, 'order');
  const flexDirection = getProperty(props, 'flexDirection');
  const alignItems = getProperty(props, 'alignItems');
  const justifyContent = getProperty(props, 'justifyContent');
  const flexWrap = getProperty(props, 'flexWrap');
  const flexGrow = getProperty(props, 'flexGrow');
  const flexShrink = getProperty(props, 'flexShrink');
  const flexBasis = getProperty(props, 'flexBasis');
  const alignContent = getProperty(props, 'alignContent');
  const flexFlow = getProperty(props, 'flexFlow');
  return interpolate({
    flex,
    order,
    flexDirection,
    alignItems,
    justifyContent,
    flexWrap,
    flexGrow,
    flexShrink,
    flexBasis,
    alignContent,
    flexFlow,
  });
};

export type GridProps = {
  grid?: CSS.GridProperty;
  gridArea?: CSS.GridAreaProperty;
  area?: CSS.GridAreaProperty;
  gridAutoColumns?: CSS.GridAutoColumnsProperty<string | number>;
  autoColumns?: CSS.GridAutoColumnsProperty<string | number>;
  gridAutoFlow?: CSS.GridAutoFlowProperty;
  autoFlow?: CSS.GridAutoFlowProperty;
  gridAutoRows?: CSS.GridAutoRowsProperty<string | number>;
  autoRows?: CSS.GridAutoRowsProperty<string | number>;
  gridColumnEnd?: CSS.GridColumnEndProperty;
  columnEnd?: CSS.GridColumnEndProperty;
  gridColumnGap?: CSS.GridColumnGapProperty<string | number>;
  columnGap?: CSS.GridColumnGapProperty<string | number>;
  gridColumnStart?: CSS.GridColumnStartProperty;
  columnStart?: CSS.GridColumnStartProperty;
  gridColumn?: CSS.GridColumnProperty;
  column?: CSS.GridColumnProperty;
  gridGap?: CSS.GridGapProperty<string | number>;
  gap?: CSS.GridGapProperty<string | number>;
  gridRowEnd?: CSS.GridRowEndProperty;
  rowEnd?: CSS.GridRowEndProperty;
  gridRowGap?: CSS.GridRowGapProperty<string | number>;
  rowGap?: CSS.GridRowGapProperty<string | number>;
  gridRowStart?: CSS.GridRowStartProperty;
  rowStart?: CSS.GridRowStartProperty;
  gridRow?: CSS.GridRowProperty;
  row?: CSS.GridRowProperty;
  gridTemplateAreas?: CSS.GridTemplateAreasProperty;
  areas?: CSS.GridTemplateAreasProperty;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string | number>;
  columns?: CSS.GridTemplateColumnsProperty<string | number>;
  gridTemplateRows?: CSS.GridTemplateRowsProperty<string | number>;
  rows?: CSS.GridTemplateRowsProperty<string | number>;
  gridTemplate?: CSS.GridTemplateProperty;
  template?: CSS.GridTemplateProperty;
};

export const gridPropTypes = {
  grid: string,
  gridArea: oneOfType([string, number]),
  area: oneOfType([string, number]),
  gridAutoColumns: oneOfType([string, number]),
  autoColumns: oneOfType([string, number]),
  gridAutoFlow: string,
  autoFlow: string,
  gridAutoRows: oneOfType([string, number]),
  autoRows: oneOfType([string, number]),
  gridColumnEnd: oneOfType([string, number]),
  columnEnd: oneOfType([string, number]),
  gridColumnGap: oneOfType([string, number]),
  columnGap: oneOfType([string, number]),
  gridColumnStart: oneOfType([string, number]),
  columnStart: oneOfType([string, number]),
  gridColumn: oneOfType([string, number]),
  column: oneOfType([string, number]),
  gridGap: oneOfType([string, number]),
  gap: oneOfType([string, number]),
  gridRowEnd: oneOfType([string, number]),
  rowEnd: oneOfType([string, number]),
  gridRowGap: oneOfType([string, number]),
  rowGap: oneOfType([string, number]),
  gridRowStart: oneOfType([string, number]),
  rowStart: oneOfType([string, number]),
  gridRow: oneOfType([string, number]),
  row: oneOfType([string, number]),
  gridTemplateAreas: string,
  areas: string,
  gridTemplateColumns: oneOfType([string, number]),
  columns: oneOfType([string, number]),
  gridTemplateRows: oneOfType([string, number]),
  rows: oneOfType([string, number]),
  gridTemplate: string,
  template: string,
};

export const grid = <P extends GridProps>(props: P) => {
  return interpolate({
    grid: getProperty(props, 'grid'),
    gridArea: getProperty(props, 'gridArea'),
    gridAutoColumns: getProperty(props, 'gridAutoColumns'),
    gridAutoFlow: getProperty(props, 'gridAutoFlow'),
    gridAutoRows: getProperty(props, 'gridAutoRows'),
    gridColumnEnd: getProperty(props, 'gridColumnEnd'),
    gridColumnGap: toPx(getProperty(props, 'gridColumnGap')),
    gridColumnStart: getProperty(props, 'gridColumnStart'),
    gridColumn: getProperty(props, 'gridColumn'),
    gridGap: toPx(getProperty(props, 'gridGap')),
    gridRowEnd: getProperty(props, 'gridRowEnd'),
    gridRowGap: toPx(getProperty(props, 'gridRowGap')),
    gridRowStart: getProperty(props, 'gridRowStart'),
    gridRow: getProperty(props, 'gridRow'),
    gridTemplateAreas: getProperty(props, 'gridTemplateAreas'),
    gridTemplateColumns: getProperty(props, 'gridTemplateColumns'),
    gridTemplateRows: getProperty(props, 'gridTemplateRows'),
    gridTemplate: getProperty(props, 'gridTemplate'),
  });
};

export type TypographyProps = {
  fontFamily?: CSS.FontFamilyProperty;
  fontSize?: CSS.FontSizeProperty<string | number>;
  fontWeight?: CSS.FontWeightProperty;
  lineHeight?: CSS.LineHeightProperty<string | number>;
  letterSpacing?: CSS.LetterSpacingProperty<string | number>;
  textAlign?: CSS.TextAlignProperty;
  fontStyle?: CSS.FontStyleProperty;
};

const fontWeightType = oneOfType([
  number,
  oneOf<CSS.FontWeightProperty>([
    '-moz-initial',
    'inherit',
    'initial',
    'revert',
    'unset',
    'normal',
    'bold',
    'bolder',
    'lighter',
  ]),
]);

const textAlignType = oneOf<CSS.TextAlignProperty>([
  '-moz-initial',
  'inherit',
  'initial',
  'revert',
  'unset',
  'center',
  'end',
  'justify',
  'left',
  'match-parent',
  'right',
  'start',
]);

export const typographyPropTypes = {
  fontFamily: string,
  fontSize: oneOfType([string, number]),
  fontWeight: fontWeightType,
  lineHeight: oneOfType([string, number]),
  letterSpacing: oneOfType([string, number]),
  textAlign: textAlignType,
  fontStyle: string,
};

export const typography = <P extends TypographyProps>(props: P) => {
  return interpolate({
    fontFamily: getProperty(props, 'fontFamily'),
    fontSize: toPx(getProperty(props, 'fontSize')),
    fontWeight: getProperty(props, 'fontWeight'),
    lineHeight: toPx(getProperty(props, 'lineHeight')),
    letterSpacing: toPx(getProperty(props, 'letterSpacing')),
    textAlign: getProperty(props, 'textAlign'),
    fontStyle: getProperty(props, 'fontStyle'),
  });
};

export type ColorProps = {
  color?: CSS.ColorProperty;
  c?: CSS.ColorProperty;
  backgroundColor?: CSS.BackgroundColorProperty;
  bg?: CSS.BackgroundColorProperty;
};

export const colorPropTypes = {
  color: string,
  c: string,
  backgroundColor: string,
  bg: string,
};

export const color = <P extends ColorProps>(props: P) => {
  return interpolate({
    color: getProperty(props, 'color'),
    backgroundColor: getProperty(props, 'backgroundColor'),
  });
};

import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import colors from './colors';

interface TypographyProps extends TextProps {
  variant: "h1" | "h2" | "body" | "body2" | "title",
  color?: "textPrimary" | "textSecondary"
}

function Typography({ variant, children, style, color = "textPrimary", ...props }: TypographyProps) {
  return (
    <Text style={[style, styles[color], styles[variant]]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  textPrimary: {
    color: colors.textPrimary,
  },
  textSecondary: {
    color: colors.textSecondary,
  },
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 22,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 16,
  },
  body2: {
    fontSize: 14,
  },
});


export default Typography;
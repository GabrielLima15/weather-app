import React from 'react';
import { Select as KittenSelect, SelectProps } from '@ui-kitten/components';

export function Select(props: SelectProps) {
  return (
    <KittenSelect
      {...props}
      style={[{ minWidth: 200 }, props.style]}
    />
  );
} 
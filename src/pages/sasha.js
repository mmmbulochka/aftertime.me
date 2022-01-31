import * as React from 'react';
import {Input, SIZE} from 'baseui/input';

export default () => {
  const [value, setValue] = React.useState('Hello');
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      size={SIZE.mini}
      placeholder='Controlled Input'
      clearOnEscape
    />
  );
};

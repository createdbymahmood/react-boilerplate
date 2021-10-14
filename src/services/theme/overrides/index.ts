import { merge } from 'lodash';
import { Theme } from '@mui/material/styles';
import Button from './Button';
import Switch from './Switch';

export default function ComponentsOverrides(theme: Theme) {
    return merge(Button(theme), Switch(theme));
}

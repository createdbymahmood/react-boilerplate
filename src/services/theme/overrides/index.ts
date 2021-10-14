import { merge } from 'lodash';
import { Theme } from '@mui/material/styles';
import Button from './Button';
import Switch from './Switch';
import TextField from './TextField';

export default function ComponentsOverrides(theme: Theme) {
    return merge(Button(theme), Switch(theme), TextField(theme));
}

import CheckmarkCell from './CheckmarkCell';
import IntelliCell from './IntelliCell';
import TagCell from './TagCell';

export const Cell = Object.assign(IntelliCell, {
  Checkmark: CheckmarkCell,
  Tag: TagCell,
});

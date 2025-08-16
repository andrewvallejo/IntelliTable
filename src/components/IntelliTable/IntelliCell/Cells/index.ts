import CheckmarkCell from './CheckmarkCell/CheckmarkCell';
import EmptyCell from './EmptyCell.tsx/EmptyCell';
import LinkCell from './LinkCell/LinkCell';
import ProgressCell from './ProgressCell/ProgressCell';
import RatingCell from './RatingCell/RatingCell';
import TagCell from './TagCell/TagCell';

export const Cells = Object.assign({
  Checkmark: CheckmarkCell,
  Tag: TagCell,
  Link: LinkCell,
  Rating: RatingCell,
  Progress: ProgressCell,
  Empty: EmptyCell,
});

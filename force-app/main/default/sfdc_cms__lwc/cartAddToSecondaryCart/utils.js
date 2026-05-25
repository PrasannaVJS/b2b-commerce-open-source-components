import Toast from 'site/commonToast';
import { MAX_NAME_LENGTH, TRAILING_DOTS } from './constants';
export function getTruncatedName(name) {
  if (name === undefined || name.length <= MAX_NAME_LENGTH) {
    return name;
  }
  return name.substring(0, MAX_NAME_LENGTH - TRAILING_DOTS.length) + TRAILING_DOTS;
}
export function getTotalProductCount(totalProductCount) {
  const parsedCount = Number.parseInt(totalProductCount ?? '0', 10);
  return Number.isNaN(parsedCount) ? 0 : parsedCount;
}
export function getCartMenuLabel(cartName, totalProductCount, itemsLabel) {
  if (!cartName) {
    return cartName;
  }
  const itemCount = getTotalProductCount(totalProductCount);
  return `${cartName} (${itemCount} ${itemsLabel})`;
}
export function showAddToSecondaryCartSuccessToast(label, target) {
  Toast.show({
    label,
    variant: 'success'
  }, target);
}
export function showSecondaryCartErrorToast(label, target) {
  Toast.show({
    label,
    variant: 'error'
  }, target);
}
export function showAddToSecondaryCartErrorToast(label, target) {
  showSecondaryCartErrorToast(label, target);
}
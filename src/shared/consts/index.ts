import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import { sharedi18n } from '../i18n';
export const localePrefix = 'always'; // Default
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales: sharedi18n.locales, localePrefix});
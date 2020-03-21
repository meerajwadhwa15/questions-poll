import {months} from '@/config/constants'

/**
 * Format date
 * @param date 
 * @return date (Format: DD-MMM-YYYY)
 */
const dateFormater = (date: string): string => {
    const formatDate = new Date(date);
    return formatDate.getDate() + '/' + months[formatDate.getMonth() + 1] + '/' + formatDate.getFullYear();
}

export { dateFormater };
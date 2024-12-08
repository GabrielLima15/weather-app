import { translate, translateWeekDay } from '../../../utils/translations';
import type { ForecastDay } from '../../../services/types/weather';

export function useForecastListController(data: ForecastDay[], language: string) {
  const translations = {
    title: translate('forecast', language),
  };

  const getForecastItems = () => {
    return data.map((item) => ({
      key: item.date,
      day: translateWeekDay(new Date(item.date), language),
      icon: `https:${item.day.condition.icon}`,
      maxTemp: Math.round(item.day.maxtemp_c),
      minTemp: Math.round(item.day.mintemp_c),
    }));
  };

  return {
    translations,
    forecastItems: getForecastItems(),
  };
} 
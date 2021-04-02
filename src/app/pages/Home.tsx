import { useTranslation } from 'react-i18next';

/* translations */
import { translations } from 'locales/translations';

export default () => {
    const { t } = useTranslation();
    return <div>{t(translations.addServiceToDashboard)}</div>;
};

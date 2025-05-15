import { useTranslation } from 'react-i18next';
import { Button } from '~/components/ui/button';
import { FileDown, Calendar, Filter, BookOpen, List, Download } from 'lucide-react';

export default function Product() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center gap-8 pb-12">
            {/* Hero Section */}
            <section className="flex w-full justify-center bg-gradient-to-b from-secondary/20 to-background py-20">
                <div className="container max-w-4xl flex-col space-y-6 text-center">
                    <h1 className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent">
                        {t('product.hero.title')}
                    </h1>
                    <p className="text-xl text-muted-foreground">{t('product.hero.subtitle')}</p>
                    <div className="flex flex-col items-center gap-2">
                        <Button size="lg" className="gap-2" disabled>
                            <Download className="h-4 w-4" />
                            {t('product.download')}
                        </Button>
                        <p className="text-sm text-muted-foreground">** {t('product.comingSoon')}</p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container max-w-6xl space-y-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="space-y-4 rounded-lg border p-6 transition-colors hover:bg-accent/50">
                        <FileDown className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-semibold">{t('product.features.import.title')}</h3>
                        <ul className="list-disc space-y-2 pl-4 text-muted-foreground">
                            {t('product.features.import.items', { returnObjects: true }).map((item: string) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4 rounded-lg border p-6 transition-colors hover:bg-accent/50">
                        <Filter className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-semibold">{t('product.features.filter.title')}</h3>
                        <p className="text-muted-foreground">{t('product.features.filter.description')}</p>
                    </div>

                    <div className="space-y-4 rounded-lg border p-6 transition-colors hover:bg-accent/50">
                        <Calendar className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-semibold">{t('product.features.personalization.title')}</h3>
                        <ul className="list-disc space-y-2 pl-4 text-muted-foreground">
                            {t('product.features.personalization.items', { returnObjects: true }).map((item: string) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Key Features */}
                <div className="rounded-xl border p-8">
                    <h2 className="mb-6 text-center text-3xl font-bold">{t('product.features.keyFeatures.title')}</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-lg border p-4 text-center">
                            <BookOpen className="mx-auto h-10 w-10 text-primary" />
                            <h3 className="mt-2 text-xl font-medium">{t('product.features.keyFeatures.csvProcessing.title')}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {t('product.features.keyFeatures.csvProcessing.description')}
                            </p>
                        </div>
                        <div className="rounded-lg border p-4 text-center">
                            <Filter className="mx-auto h-10 w-10 text-primary" />
                            <h3 className="mt-2 text-xl font-medium">{t('product.features.keyFeatures.filtering.title')}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{t('product.features.keyFeatures.filtering.description')}</p>
                        </div>
                        <div className="rounded-lg border p-4 text-center">
                            <Calendar className="mx-auto h-10 w-10 text-primary" />
                            <h3 className="mt-2 text-xl font-medium">{t('product.features.keyFeatures.scheduling.title')}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{t('product.features.keyFeatures.scheduling.description')}</p>
                        </div>
                        <div className="rounded-lg border p-4 text-center">
                            <List className="mx-auto h-10 w-10 text-primary" />
                            <h3 className="mt-2 text-xl font-medium">{t('product.features.keyFeatures.eventList.title')}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{t('product.features.keyFeatures.eventList.description')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

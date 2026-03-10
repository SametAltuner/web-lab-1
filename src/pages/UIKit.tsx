import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
    const [alertVisible, setAlertVisible] = useState(true);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-14">
            <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">🎨 UI Kit</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Tüm component varyantları tek bir sayfada. Dark mode toggle'ı kullanarak her iki temayı test edebilirsin.
                </p>
            </div>

            {/* ─── BUTTONS ─────────────────────────────────── */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                    Buttons
                </h2>

                {/* Varyant 1: Renk varyantları */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">Renk Varyantları</p>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                </div>

                {/* Varyant 2: Boyut varyantları */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">Boyut Varyantları</p>
                    <div className="flex flex-wrap items-end gap-3">
                        <Button variant="primary" size="sm">Küçük (sm)</Button>
                        <Button variant="primary" size="md">Orta (md)</Button>
                        <Button variant="primary" size="lg">Büyük (lg)</Button>
                    </div>
                </div>

                {/* Varyant 3: Disabled */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">Disabled Durumu</p>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary" disabled>Disabled Primary</Button>
                        <Button variant="secondary" disabled>Disabled Secondary</Button>
                        <Button variant="danger" disabled>Disabled Danger</Button>
                    </div>
                </div>
            </section>

            {/* ─── INPUTS ──────────────────────────────────── */}
            <section className="space-y-4 max-w-md">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                    Inputs
                </h2>

                {/* Varyant 4: Normal */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Normal Input</p>
                    <Input id="ui-name" label="Ad Soyad" placeholder="Bir şey yazın..." />
                </div>

                {/* Varyant 5: Error */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Hatalı Input</p>
                    <Input id="ui-err" label="E-posta" type="email" defaultValue="gecersiz@" error="Geçerli bir e-posta adresi girin." />
                </div>

                {/* Varyant 6: Help Text */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Help Text</p>
                    <Input id="ui-help" label="Şifre" type="password" helpText="En az 8 karakter, büyük harf ve rakam içermeli." />
                </div>

                {/* Varyant 7: Disabled */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Disabled</p>
                    <Input id="ui-dis" label="Kullanıcı Adı" disabled value="samet.altuner" readOnly />
                </div>
            </section>

            {/* ─── CARDS ───────────────────────────────────── */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                    Cards
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Varyant 8: Elevated */}
                    <Card
                        variant="elevated"
                        title="Elevated Card"
                        footer={<Button size="sm" variant="primary">Detay Gör</Button>}
                    >
                        Gölge ile yükseltilmiş kart. Öne çıkan içerikler için kullanılır. Hover'da gölge daha belirgin olur.
                    </Card>

                    {/* Varyant 9: Outlined */}
                    <Card
                        variant="outlined"
                        title="Outlined Card"
                        footer={<Button size="sm" variant="secondary">Daha Fazla</Button>}
                    >
                        Çerçeveli kart. İkincil içerikler veya liste öğeleri için idealdir. Minimal ve temiz görünüm sunar.
                    </Card>

                    {/* Varyant 10: Filled */}
                    <Card
                        variant="filled"
                        title="Filled Card"
                        footer={<Button size="sm" variant="ghost">Gözat</Button>}
                    >
                        Dolgulu arka plan ile kart. Arka plan rengiyle ayrışmayan ama içerik oluşturan gruplar için kullanılır.
                    </Card>
                </div>
            </section>

            {/* ─── ALERTS ──────────────────────────────────── */}
            <section className="space-y-4 max-w-xl">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                    Alerts
                </h2>

                {/* Varyant 11: Info */}
                <Alert variant="info" title="Bilgi">
                    Formunuz başarıyla kaydedildi. İşlem birkaç dakika içinde tamamlanacak.
                </Alert>

                {/* Varyant 12: Success */}
                <Alert variant="success" title="Başarılı">
                    Hesabınız doğrulandı! Artık tüm özelliklere erişebilirsiniz.
                </Alert>

                {/* Varyant 13: Warning */}
                <Alert variant="warning" title="Uyarı">
                    Oturumunuz 5 dakika sonra sona erecek. Çalışmalarınızı kaydediniz.
                </Alert>

                {/* Varyant 14: Error (dismissible) */}
                {alertVisible ? (
                    <Alert
                        variant="error"
                        title="Hata"
                        dismissible
                        onDismiss={() => setAlertVisible(false)}
                    >
                        Bağlantı kurulamadı. İnternet bağlantınızı kontrol edip tekrar deneyin.
                    </Alert>
                ) : (
                    <div className="text-sm text-gray-400 dark:text-gray-500 italic">
                        Error alert kapatıldı.{' '}
                        <button
                            onClick={() => setAlertVisible(true)}
                            className="underline hover:no-underline focus:outline-none"
                        >
                            Geri getir
                        </button>
                    </div>
                )}
            </section>

        </div>
    );
}

<?php

namespace App\Console;

use App\Models\Offer;
use App\Models\Report;
use Carbon\Carbon;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{

    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        $schedule->call(
            function () {
                try {
                    $offers = Offer::all();
                    foreach ($offers as $offer) {
                        Report::create([
                            'enterprise_name' => $offer->enterprise_name,
                            'description' => $offer->description,
                            'reward' => $offer->reward->description,
                            'amount_remaining' => $offer->amount_available,
                            'amount_actived' => ($offer->amount_registered - $offer->amount_available),
                            'offer_active' => $offer->status,
                            'date_created' => $offer->date_opened,
                            'date_remaining' => Carbon::parse($offer->date_opened)->diffInDays($offer->date_closed),
                            'date_executed' => Carbon::now(),
                        ]);
                    }
                } catch (\Exception $e) {
                    echo $e->getMessage();
                }
            }
        )->hourly();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}

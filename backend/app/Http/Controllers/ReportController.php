<?php

namespace App\Http\Controllers;

use App\Models\Report;
use App\Http\Requests\StoreReportRequest;
use App\Http\Requests\UpdateReportRequest;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function __construct(
        private readonly Report $report
    ) {
    }

    public function index()
    {
        return $this->report->all();
    }

    public function store(Request $request)
    {
        $data = $request->validated();
        return $this->report->create($data);
    }

    public function show(int $reportId)
    {
        return $this->report->newQuery()->findOrFail($reportId);
    }

    public function update(Request $request, int $reportId)
    {
        $data = $request->validated();
        $report = $this->report->newQuery()->findOrFail($reportId);
        $report->update($data);
        return $report;
    }
}

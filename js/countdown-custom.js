jQuery(document).ready(function() {
    $(function () {
        // Uganda Evaluation Week - May 4-8, 2026
        // Countdown to May 4, 2026 at 8:00 AM
        $('#defaultCountdown').countdown({
            until: new Date(2026, 4, 4, 8, 0, 0), // May 4, 2026 at 8:00 AM (month is 0-indexed)
            format: 'dHMS',
            labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
            labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second']
        });
    });
});

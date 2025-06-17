function main() {
    return {
        show: false,
        days: 0,
        hours: 0,
        minutes: 0,

        get timeString() {
            let parts = [];
            if (this.days > 0) parts.push(`${this.days} Hari`);
            if (this.hours > 0) parts.push(`${this.hours} Jam`);
            parts.push(`${this.minutes} Menit`);
            return parts.join(' ');
        },

        listen() {
            window.addEventListener('message', (event) => {
                let data = event.data;

                switch (data.type) {
                    case 'show':
                        this.show = data.show;
                        break;

                    case 'update':
                        this.days = data.days || 0;
                        this.hours = data.hours || 0;
                        this.minutes = data.minutes || 0;
                        break;
                }
            });
        }
    };
}

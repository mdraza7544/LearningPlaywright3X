let responseTime = 850;
let sla = 1000;
let slaStatus =responseTime<=sla?"Within Sla":"SlA breached";
console.log(`Response : ${responseTime}ms - ${slaStatus}`);
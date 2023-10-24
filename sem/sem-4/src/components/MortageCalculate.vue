<template >
    <div>
        <form>
            <input v-model.number="credit" type="number" placeholder="сумма кредита">
            <input v-model.number="percent" type="number" placeholder="процент">
            <input v-model.number="period" type="number" placeholder="срок кредита">
        </form>
    </div>
    <h3>Ежемесячный платеж - {{ monthPayment.payByMonth }} </h3>
    <h4>Сумма кредита - {{ monthPayment.total }} </h4>
</template>
<script>
export default {
    data() {
        return {
            credit: null,
            percent: null,
            period: null,
        }
    },
    computed: {
        monthPayment() {
            const principal = parseFloat(this.credit);
            const interestRate = parseFloat(this.percent) / 100 / 12;
            const loanTermMonths = parseFloat(this.period) * 12;

            const numerator = principal * interestRate * Math.pow(1 + interestRate, loanTermMonths);
            const denominator = Math.pow(1 + interestRate, loanTermMonths) - 1;
            const payByMonth = (numerator / denominator).toFixed(2);
            const total = (payByMonth * 12 * this.period).toFixed(2);
            return { payByMonth, total };

        }
    }
}
</script>
<style lang="scss"></style>
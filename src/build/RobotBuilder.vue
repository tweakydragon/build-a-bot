<template>
<div class="content">
    <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
  <div class="top-row">
    <div class="top part">
        <div class="robot-name">
            {{ selectedRobot.head.title }}
            <span v-if="selectedRobot.head.onSale" class="sale">SALE!</span>
        </div>
      <img :src="selectedRobot.head.imageUrl" alt="head" />
      <button @click="selectPreviousHead()" class="prev-selector">&#9668;</button>
      <button @click="selectNextHead()" class="next-selector">&#9658;</button>
    </div>
  </div>
  <div class="middle-row">
    <div class="left part">
        <img :src="selectedRobot.leftArm.imageUrl" alt="left arm" />
      <button @click="selectNextLeftArm" class="prev-selector">&#9650;</button>
      <button @click="selectPreviousLeftArm" class="next-selector">&#9660;</button>
    </div>
    <div class="center part">
        <img :src="selectedRobot.torso.imageUrl" alt="torso" />
      <button @click="selectNextTorso" class="prev-selector">&#9668;</button>
      <button @click="selectPreviousTorso" class="next-selector">&#9658;</button>
    </div>
    <div class="right part">
        <img :src="selectedRobot.rightArm.imageUrl" alt="right arm" />
      <button @click="selectNextRightArm" class="prev-selector">&#9650;</button>
      <button @click="selectPreviousRightArm" class="next-selector">&#9660;</button>
    </div>
  </div>
  <div class="bottom-row">
    <div class="bottom part">
        <img :src="selectedRobot.base.imageUrl" alt="base" />
      <button @click="selectNextBase" class="prev-selector">&#9668;</button>
      <button @click="selectPreviousBase" class="next-selector">&#9658;</button>
    </div>
  </div>
</div>
<div>
    <h1>Cart</h1>
    <table>
        <thead>
            <tr>
                <th>Robot</th>
                <th class="cost">Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="robot in cart" :key="robot.head.id">
                <td> {{ robot.head.title }}</td>
                <td class="cost">{{  toCurrency( robot.cost )}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import parts from '../data/parts';
import toCurrency from '../shared/formatters';

function getNextValidIndex(currentIndex, array) {
  const nextIndex = currentIndex + 1;
  return nextIndex < array.length ? nextIndex : 0;
}

function getPreviousValidIndex(currentIndex, array) {
  const previousIndex = currentIndex - 1;
  return previousIndex >= 0 ? previousIndex : array.length - 1;
}

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts: parts,
      selectedHeadIndex: 0,
      selectedRightArmIndex: 0, // Added for arms
      selectedLeftArmIndex: 0, // Added for arms
      selectedTorsosIndex: 0, // Added for torsos
      selectedBasesIndex: 0, // Added for bases
      cart: [],
    };
  },
  computed: {
    selectedRobot() {
      return {
        head: this.availableParts.heads[this.selectedHeadIndex],
        rightArm: this.availableParts.arms[this.selectedRightArmIndex],
        leftArm: this.availableParts.arms[this.selectedLeftArmIndex],
        torso: this.availableParts.torsos[this.selectedTorsosIndex],
        base: this.availableParts.bases[this.selectedBasesIndex],
      };
    },
  },
  methods: {

    toCurrency,
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost + robot.rightArm.cost + robot.leftArm.cost +
         robot.torso.cost + robot.base.cost;

      this.cart.push({ ...robot, cost });
      console.log(this.cart.length);
    },

    selectNextHead() {
      console.log('Next head selected');
      this.selectedHeadIndex = getNextValidIndex(this.selectedHeadIndex, this.availableParts.heads);
    },
    selectPreviousHead() {
      console.log('Previous head selected');
      this.selectedHeadIndex = getPreviousValidIndex(
        this.selectedHeadIndex,
        this.availableParts.heads,
      );
    },
    selectNextRightArm() {
      console.log('Next right arm selected');
      this.selectedRightArmIndex = getNextValidIndex(
        this.selectedRightArmIndex,
        this.availableParts.arms,
      );
    },
    selectPreviousRightArm() {
      console.log('Previous right arm selected');
      this.selectedRightArmIndex = getPreviousValidIndex(
        this.selectedRightArmIndex,
        this.availableParts.arms,
      );
    },
    selectNextLeftArm() {
      console.log('Next left arm selected');
      this.selectedLeftArmIndex = getNextValidIndex(
        this.selectedLeftArmIndex,
        this.availableParts.arms,
      );
    },
    selectPreviousLeftArm() {
      console.log('Previous left arm selected');
      this.selectedLeftArmIndex = getPreviousValidIndex(
        this.selectedLeftArmIndex,
        this.availableParts.arms,
      );
    },
    selectNextTorso() {
      console.log('Next torso selected');
      this.selectedTorsosIndex = getNextValidIndex(
        this.selectedTorsosIndex,
        this.availableParts.torsos,
      );
    },
    selectPreviousTorso() {
      console.log('Previous torso selected');
      this.selectedTorsosIndex = getPreviousValidIndex(
        this.selectedTorsosIndex,
        this.availableParts.torsos,
      );
    },
    selectNextBase() {
      console.log('Next base selected');
      this.selectedBasesIndex = getNextValidIndex(
        this.selectedBasesIndex,
        this.availableParts.bases,
      );
    },
    selectPreviousBase() {
      console.log('Previous base selected');
      this.selectedBasesIndex = getPreviousValidIndex(
        this.selectedBasesIndex,
        this.availableParts.bases,
      );
    },
  },

};
</script>

<style>
.part {
  position: relative;
  width: 200px;
  height: 200px;
  border: 3px solid #aaa;
}

.part img {
  width: 200px;
}

.top-row {
  display: flex;
  justify-content: space-around;
}

.middle-row {
  display: flex;
  justify-content: center;
}

.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}

.top {
  border-bottom: none;
}

.left {
  border-right: none;
}

.right {
  border-left: none;
}

.left img {
  transform: rotate(-90deg);
}

.right img {
  transform: rotate(90deg);
}

.bottom {
  border-top: none;
}

.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 206px;
}

.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 206px;
}

.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}

.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 179px;
  height: 25px;
}

.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 179px;
  height: 25px;
}

.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 179px;
  height: 25px;
}

.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 179px;
  height: 25px;
}

.right .next-selector {
  right: -3px;
}

.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.sale {
  color: red;

}

.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}

td,th {
  padding: 5px;
  text-align: left;
  padding-right: 20px;
}

.cost {
  text-align: right;
}
</style>

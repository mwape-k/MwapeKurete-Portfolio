<template>
  <div :class="$style.projectCard" :style="{ backgroundColor: bgColor }">
    <div :class="$style.projectCardInCont">
      <div :class="$style.projectType">
        <div :class="$style.fullstackDevProject">{{ projectType }}</div>
        <img :src="typeIcon" :class="$style.iconBox" alt="Type Icon" />
      </div>
      <div :class="$style.projectStack">
        <div
          v-for="(tech, idx) in projectStack"
          :key="idx"
          :class="$style.mongodb"
        >
          {{ tech }}
        </div>
      </div>
      <div :class="$style.projectTitle">
        <div :class="$style.projectName">
          {{ projectTitle }}
        </div>
      </div>
      <div :class="$style.projectSticker">
        <img
          :src="projectSticker"
          :class="$style.peelingOffSticker"
          alt="Sticker"
        />
      </div>
      <div :class="$style.ctaSection">
        <div :class="$style.projectDescription">
          <div :class="$style.aSinglePage">
            {{ projectDesc }}
          </div>
        </div>
        <div :class="$style.cta" @click="onCta">
          <img
            v-if="ctaBtnIcon"
            :src="ctaBtnIcon"
            :class="$style.btnIcon"
            alt="Button Icon"
          />
          <div :class="$style.projectName">{{ ctaBtnText }}</div>
          <img
            v-if="ctaBtnIcon"
            :src="ctaBtnIcon"
            :class="$style.btnIcon"
            alt="Button Icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  typeIcon: string;
  projectType: string;
  projectStack: string[];
  projectTitle: string;
  projectSticker: string;
  projectDesc: string;
  ctaBtnIcon?: string; // Make icon optional
  ctaBtnText: string;
  bgColor?: string;
  onCta?: () => void;
}

const props = defineProps<Props>();

// Expose to template so destructuring works with CSS modules:
const {
  typeIcon,
  projectType,
  projectStack,
  projectTitle,
  projectSticker,
  projectDesc,
  ctaBtnIcon,
  ctaBtnText,
  bgColor = "#ff595e",
  onCta = () => {},
} = props;
</script>

<!-- Keep your styles as is! -->
<style module>
/* ... styles from your original post, unchanged ... */
.projectCard {
  width: fit-content;
  height: 480px;
  position: relative;
  border-radius: 24px;
  background-color: #ff595e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 21px 19px;
  box-sizing: border-box;
  text-align: center;
  font-size: 48px;
  color: #0d0d0d;
  font-family: "Just Me Again Down Here";
}
.projectCardInCont {
  width: 757px;
  height: 430px;
  position: relative;
  box-sizing: border-box;
}
.projectType {
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid #0d0d0d;
  box-sizing: border-box;
  width: 757px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  gap: 31px;
}
.fullstackDevProject {
  height: 56px;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.iconBox {
  height: 57px;
  width: 57px;
  border-radius: 8px;
}
.projectStack {
  position: absolute;
  top: 81px;
  left: 0.5px;
  border: 1px solid #0d0d0d;
  box-sizing: border-box;
  width: 241px;
  height: 156px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  text-align: left;
  font-size: 24px;
}
.mongodb {
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}
.projectTitle {
  position: absolute;
  top: 81px;
  left: 241px;
  border: 1px solid #0d0d0d;
  box-sizing: border-box;
  width: 516px;
  height: 156px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 64px;
  font-family: Anton;
}
.projectName {
  position: relative;
}
.projectSticker {
  position: absolute;
  top: 237px;
  left: 0px;
  border: 1px solid #0d0d0d;
  box-sizing: border-box;
  width: 241px;
  height: 193px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.peelingOffSticker {
  height: 193px;
  width: 195.1px;
  position: relative;
  object-fit: cover;
}
.ctaSection {
  position: absolute;
  top: 237px;
  left: 241px;
  border: 1px solid #0d0d0d;
  box-sizing: border-box;
  width: 516px;
  height: 193px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
  font-size: 20px;
  font-family: "Darker Grotesque";
}
.projectDescription {
  display: flex;
  align-items: center;
  justify-content: center;
}
.aSinglePage {
  height: 62px;
  width: 353px;
  position: relative;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.cta {
  align-self: stretch;
  border-radius: 2px;
  background-color: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  gap: 20px;
  font-size: 36px;
  color: #fff;
  font-family: "Just Me Again Down Here";
}
.btnIcon {
  height: 24px;
  width: 24px;
  position: relative;
}
</style>

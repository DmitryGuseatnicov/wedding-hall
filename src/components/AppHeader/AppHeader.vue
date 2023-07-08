<script setup lang="ts">
import { IcMapPin, IcLogo, IcMenu } from '@/assets/icons';
import { useBreakpoints, useBooleanState } from '@/hooks';
import { APP_INFO } from '@/constants';
import { SocialLink } from '@/components/SocialLink';
import { AppNavbar } from '@/components/AppNavbar';
import { VButton } from '@/components/VButton';

const { breakPointType } = useBreakpoints();

const [isNavbarOpen, , closeNavbar, toggleNavbar] = useBooleanState(false);

const handleCallButtonClick = () => {
  window.open(`tel:${APP_INFO.phone.replace(/[^+\d]/g, '')}`, '_self');
};

</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__top">
        <VButton
          class="header__burger-button"
          v-if="breakPointType!=='desktop'"
          @click="toggleNavbar"
          size="content"
          fill="clear"
        >
          <IcMenu />
        </VButton>
        <router-link class="header__logo" to="/">
          <IcLogo />
        </router-link>
        <div class="header__info-panel" v-if="breakPointType === 'desktop'" >
          <div class="header__address-wrapper">
            <IcMapPin class="header__address-icon"/>
            <span class="header__address">{{ APP_INFO.address }}</span>
          </div>
          <div class="header__social-links">
            <SocialLink color='second' type="telegram" shape="square" />
            <SocialLink color='second' type="vk" shape="square" />
          </div>
          <div class="header__phone">
            <div class="header__phone-value">{{ APP_INFO.phone }}</div>
            <a
              class="header__phone-link"
              :href="`tel:${APP_INFO.phone.replace(/[^+\d]/g, '')}`"
            >
              Перезвоните мне
            </a>
          </div>
        </div>
        <VButton
          class="header__call-button"
          v-if="breakPointType !== 'desktop'"
          size="small"
          @click="handleCallButtonClick"
        >
          Позвонить
        </VButton>
      </div>
      <div class="header__bottom" v-if="isNavbarOpen || breakPointType === 'desktop'">
        <AppNavbar
          :type="breakPointType !=='desktop' ? 'vertical' : 'horizontal'"
          :is-underline-active-item="breakPointType === 'desktop'"
          @on-link-click="closeNavbar"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  .header {
    border-radius: 0px 0px 16px 16px;
    box-shadow: 0px 4px 4px 0px #0000000D;

    &__wrapper {
      @include app-container
    }

    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 12px;
    }

    &__bottom {
      margin: 40px auto;
      max-width: 1318px;

      @include mobile {
        position: absolute;
        top: 76px;
        left: 0;
        right: 0;
        margin: 0;
        padding-top: 40px;
        width: 100%;
        height: 100%;
        z-index: 10;
        background: #fff;
      }
    }

    &__info-panel {
      display: flex;
      justify-content: space-between;
      column-gap: 48px;
    }

    &__address-wrapper {
      max-width: 200px;
      color: $color-main-dark;

      @include centered-flexbox;
      @include text-main-medium;
    }

    &__burger-button {
      margin-right: 16px;
    }

    &__address {
      margin-left: 16px;
    }

    &__address-icon {
      min-width: 24px
    }

    &__social-links {
      display: flex;
      column-gap: 8px;
    }

    &__phone-value {
      color: $color-main-dark;

      @include text-main-medium;
    }

    &__phone-link {
      color: $color-second;

      @include text-second;
    }

    &__call-button {
      margin-left: auto;
    }
  }
</style>

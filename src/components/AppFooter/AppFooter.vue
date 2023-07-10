<script setup lang="ts">
import { IcLogoWhite } from '@/assets/icons';
import { SocialLink } from '@/components/SocialLink';

</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__inner">
      <div class="app-footer__info-content">
        <IcLogoWhite class="app-footer__logo"/>
          <div class="app-footer__social-block">
          <h4 class="app-footer__social-title">Мы в соц. сетях</h4>
          <div class="app-footer__social-links">
            <SocialLink type="facebook" shape="square" />
            <SocialLink type='whatsapp' shape="square" />
            <SocialLink type="vk" shape="square" />
          </div>
        </div>
      </div>
      <div class="app-footer__copy-right">
        © Hotel Stavropol, 2020
      </div>
    </div>

  </footer>
</template>

<style lang="scss">
.app-footer {
  margin-top: 32px;
  background: $color-main-dark;
  border-radius: 20px 20px 0px 0px;

  &__inner {
    @include app-container;
  }

  &__info-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 48px;

    @include mobile {
      margin-top: 40px;
    }
  }

  &__social-block {
    max-width: 196px;

    @include mobile {
      max-width: 100%;
      width: 100%;
      margin-top: 40px;
    }
  }

  &__social-title {
    color: #fff;

    @include text-main-medium;
  }

  &__social-links {
    display: flex;
    align-items: center;
    column-gap: 20px;
    margin-top: 16px;
  }

  &__copy-right {
    margin-top: 40px;
    color: #fff;

    @include text-main-small;
  }
}
</style>

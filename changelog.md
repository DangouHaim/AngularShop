# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [Task-1] - 2023-04-18

### Added

- Product component
- Cart component
- Alert component
- Product list component
- Purchase alert list component
- Notification service
- Product service
- Product and notification models

## [Task-2] - 2023-05-16

### Added

- All components now splitted to modules
- Added shared module
- Added cart counter and event handlers
- Added increase/decrease features to cart
- Added cart items highlight

## [Task-3] - 2023-05-24

- Added immutable functionality for cart service
- Added ConfigOptionsService and ConstantService
- Added generator service and generation factory
- Added IdGeneratorService
- Added LocalStorageService
- Added renderer2 selected directive

## [Task-4] - 2023-05-24

- Added Observable for product service
- Added sorting pipe for cart.component
- Added formatting for fake.component by using JsonPipe

## [Task-5] - 2023-06-26
- Added routing and json server
- Add/remove cart items via Json-server
- Cart increase/decrease count
- Added product page
- Added Dynamic title and Resolver
- Added an ability to clear cart using json server
- Added ProcessOrderComponent and CanLoad/CanActivate guards
- Routing is splitted on to 2 modules
- Added lazy loading for admin module protected by canLoad/canActivate

## [Task-6] - 2023-07-28
- Added JsonServer
- Added updates on package.json
- Added AuthInterceptor and TimingInterceptor
- CartService and ProductService have been update for Observable
- Added AppSettingsService for using LocalStorage via Observable

## [Task-8] - 2023-07-28
- Added reactive form
- Added custom validators for 'FirstName', 'Email', 'DeliveryAddress' fields
- Added validation directive for 'Email' field
- Added cross-field validator for DeliveryAddress
- Added dynamic FormArray for 'Phones' section
- Added validation messages on CheckoutComponent side
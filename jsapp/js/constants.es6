/**
 * A list of all shareable constants for the application.
 */

import {t} from './utils';

const HOOK_LOG_STATUSES = {
  SUCCESS: 2,
  PENDING: 1,
  FAILED: 0
}

const MODAL_TYPES = {
  SHARING: 'sharing',
  UPLOADING_XLS: 'uploading-xls',
  NEW_FORM: 'new-form',
  ENKETO_PREVIEW: 'enketo-preview',
  SUBMISSION: 'submission',
  REPLACE_PROJECT: 'replace-project',
  TABLE_COLUMNS: 'table-columns',
  REST_SERVICES: 'rest-services',
  FORM_LANGUAGES: 'form-languages',
  FORM_TRANSLATIONS_TABLE: 'form-translation-table'
}

const PROJECT_SETTINGS_CONTEXTS = {
  NEW: 'newForm',
  EXISTING: 'existingForm',
  REPLACE: 'replaceProject',
  BUILDER: 'formBuilderAside'
};

const update_states = {
  UNSAVED_CHANGES: -1,
  UP_TO_DATE: true,
  PENDING_UPDATE: false,
  SAVE_FAILED: 'SAVE_FAILED',
};

const AVAILABLE_FORM_STYLES = [
  {value: '', label: t('Simple - single page')},
  {value: 'pages', label: t('Simple - multiple pages')},
  {value: 'theme-grid', label: t('Grid - single page')},
  {value: 'pages theme-grid', label: t('Grid - multiple pages')},
];

const VALIDATION_STATUSES = {
  no_status: {
    value: null,
    label: '—'
  },
  validation_status_not_approved: {
    value: 'validation_status_not_approved',
    label: t('Not Approved')
  },
  validation_status_approved: {
    value: 'validation_status_approved',
    label: t('Approved')
  },
  validation_status_on_hold: {
    value: 'validation_status_on_hold',
    label: t('On Hold')
  },
};

const VALIDATION_STATUSES_LIST = [
  VALIDATION_STATUSES.no_status,
  VALIDATION_STATUSES.validation_status_not_approved,
  VALIDATION_STATUSES.validation_status_approved,
  VALIDATION_STATUSES.validation_status_on_hold
];

const ASSET_TYPES = {
  question: {
    id: 'question',
    label: t('question')
  },
  block: {
    id: 'block',
    label: t('block')
  },
  template: {
    id: 'template',
    label: t('template')
  },
  survey: {
    id: 'survey',
    label: t('form')
  }
}

export default {
  AVAILABLE_FORM_STYLES: AVAILABLE_FORM_STYLES,
  update_states: update_states,
  VALIDATION_STATUSES: VALIDATION_STATUSES,
  VALIDATION_STATUSES_LIST: VALIDATION_STATUSES_LIST,
  PROJECT_SETTINGS_CONTEXTS: PROJECT_SETTINGS_CONTEXTS,
  MODAL_TYPES: MODAL_TYPES,
  ASSET_TYPES: ASSET_TYPES,
  HOOK_LOG_STATUSES: HOOK_LOG_STATUSES
};

module.exports = {
    create_org                              : require('./features/create_org'),
    add_admin_user_to_org                   : require('./features/add_admin_user_to_org'),
    switch_org_context                      : require('./features/switch_org_context'),
    create_api_key                          : require('./features/create_api_key'),
    delete_api_key                          : require('./features/delete_api_key'),
    create_or_update_dashboard              : require('./features/create_or_update_dashboard'),
    fetch_settings                          : require('./features/fetch_settings'),
    update_settings                         : require('./features/update_settings'),
    grafana_stats                           : require('./features/grafana_stats'),
    global_user                             : require('./features/global_users'),
    password_for_user                       : require('./features/password_for_user'),
    permissions                             : require('./features/permissions'),
    delete_global_user                      : require('./features/delete_global_user'),
    pause_all_alerts                        : require('./features/pause_all_alerts'),
    auth_token_for_user                     : require('./features/auth_token_for_user'),
    revoke_auth_token_for_user              : require('./features/revoke_auth_token_for_user'),
    logout_user                             : require('./features/logout_user'),
    reload_provisioning_configs             : require('./features/reload_provisioning_configs'),
    reload_ldap_config                      : require('./features/reload_ldap_config'),
    get_alerts                              : require('./features/get_alerts'),
    get_alert_by_id                         : require('./features/get_alert_by_id'),
    pause_alert_by_id                       : require('./features/pause_alert_by_id'),
    get_all_notification_channels           : require('./features/get_all_notification_channels'),
    get_all_notification_channels_lookup    : require('./features/get_all_notification_channels_lookup'),
    get_notification_channel_by_uid         : require('./features/get_notification_channel_by_uid'),
    get_notification_channel_by_id          : require('./features/get_notification_channel_by_id'),
    create_notification_channel             : require('./features/create_notification_channel'),
    update_notification_channel_by_uid      : require('./features/update_notification_channel_by_uid'),
    update_notification_channel_by_id       : require('./features/update_notification_channel_by_id'),
    delete_notification_channel_by_uid      : require('./features/delete_notification_channel_by_uid'),
    delete_notification_channel_by_id       : require('./features/delete_notification_channel_by_id'),
    test_notification_channel               : require('./features/test_notification_channel'),
    create_annotation                       : require('./features/create_annotation'),
    find_annotations                        : require('./features/find_annotations'),
    find_annotations_tags                   : require('./features/find_annotations_tags'),
    create_annotation_in_graphite           : require('./features/create_annotation_in_graphite'),
    update_annotation                       : require('./features/update_annotation'),
    patch_annotation                        : require('./features/patch_annotation'),
    delete_annotation_by_id                 : require('./features/delete_annotation_by_id'),
    x_grafana_org_id                        : require('./features/x_grafana_org_id'),
    basic_auth                              : require('./features/basic_auth'),
    basic_auth_using_token                  : require('./features/basic_auth_using_token'),
    get_api_keys                            : require('./features/get_api_keys'),
    get_dashboard_by_uid                    : require('./features/get_dashboard_by_uid'),
    delete_dashboard_by_uid                 : require('./features/delete_dashboard_by_uid'),
    get_home_dashboard                      : require('./features/get_home_dashboard'),
    tags_for_dashboard                      : require('./features/tags_for_dashboard'),
    get_dashboard_permissions               : require('./features/get_dashboard_permissions'),
    update_dashboard_permissions            : require('./features/update_dashboard_permissions'),
    get_all_dashboard_versions              : require('./features/get_all_dashboard_versions'),
    get_dashboard_version                   : require('./features/get_dashboard_version'),
    restore_dashboard                       : require('./features/restore_dashboard'),
    compare_dashboard_versions              : require('./features/compare_dashboard_versions'),
    get_all_datasources                     : require('./features/get_all_datasources'),
    get_datasource_by_id                    : require('./features/get_datasource_by_id'),
    get_datasource_by_uid                   : require('./features/get_datasource_by_uid'),
    get_datasource_by_name                  : require('./features/get_datasource_by_name'),
    get_datasource_id_by_name               : require('./features/get_datasource_id_by_name'),
    create_datasource                       : require('./features/create_datasource'),
    update_datasouce_by_id                  : require('./features/update_datasouce_by_id'),
    delete_datasource_by_id                 : require('./features/delete_datasource_by_id'),
    delete_datasource_by_uid                : require('./features/delete_datasource_by_uid'),
    delete_datasource_by_name               : require('./features/delete_datasource_by_name'),
    datasource_proxy_calls                  : require('./features/datasource_proxy_calls'),
    query_datasource_by_id                  : require('./features/query_datasource_by_id'),
    enable_datasource_permissions           : require('./features/enable_datasource_permissions'),
    disable_datasource_permissions          : require('./features/disable_datasource_permissions'),
    get_datasource_permissions              : require('./features/get_datasource_permissions'),
    add_datasource_permission               : require('./features/add_datasource_permission'),
    remove_datasource_permission            : require('./features/remove_datasource_permission'),
    get_external_groups                     : require('./features/get_external_groups'),
    add_external_group                      : require('./features/add_external_group'),
    remove_external_group                   : require('./features/remove_external_group'),
    get_access_control_status               : require('./features/get_access_control_status'),
    get_all_access_control_roles            : require('./features/get_all_access_control_roles'),
    get_access_control_role_by_uid          : require('./features/get_access_control_role_by_uid'),
    create_custom_role                      : require('./features/create_custom_role'),
    update_custom_role                      : require('./features/update_custom_role'),
    delete_custom_role                      : require('./features/delete_custom_role'),
    list_roles_assigned_to_user             : require('./features/list_roles_assigned_to_user'),
    list_permissions_assigned_to_user       : require('./features/list_permissions_assigned_to_user'),
    add_user_role_assignment                : require('./features/add_user_role_assignment'),
    delete_user_role_assignment             : require('./features/delete_user_role_assignment'),
    set_user_role_assignments               : require('./features/set_user_role_assignments'),
    get_all_built_in_role_assignments       : require('./features/get_all_built_in_role_assignments'),
    create_built_in_role_assignment         : require('./features/create_built_in_role_assignment'),
    remove_built_in_role_assignment         : require('./features/remove_built_in_role_assignment'),
    get_all_folders                         : require('./features/get_all_folders'),
    get_folder_by_uid                       : require('./features/get_folder_by_uid'),
    create_folder                           : require('./features/create_folder'),
    update_folder                           : require('./features/update_folder'),
    delete_folder                           : require('./features/delete_folder'),
    get_folder_by_id                        : require('./features/get_folder_by_id'),
    get_folder_permissions                  : require('./features/get_folder_permissions'),
    update_folder_permission                : require('./features/update_folder_permission'),
    folder_or_dashboard_search              : require('./features/folder_or_dashboard_search'),
    get_current_user_prefs                  : require('./features/get_current_user_prefs'),
    update_current_user_prefs               : require('./features/update_current_user_prefs'),
    get_current_org_prefs                   : require('./features/get_current_org_prefs'),
    update_current_org_prefs                : require('./features/update_current_org_prefs'),
    create_snapshot                         : require('./features/create_snapshot'),
    get_snapshots_list                      : require('./features/get_snapshots_list'),
    get_snapshot_by_key                     : require('./features/get_snapshot_by_key'),
    delete_snapshot_by_key                  : require('./features/delete_snapshot_by_key'),
    delete_snapshot_by_deleteKey            : require('./features/delete_snapshot_by_deleteKey'),
    get_all_library_elements                : require('./features/get_all_library_elements'),    
    get_library_element_by_uid              : require('./features/get_library_element_by_uid'),
    get_library_element_by_name             : require('./features/get_library_element_by_name'),
    get_library_element_connections         : require('./features/get_library_element_connections'),
    create_library_element                  : require('./features/create_library_element'),
    update_library_element                  : require('./features/update_library_element'),
    delete_library_element                  : require('./features/delete_library_element'),
    send_a_report                           : require('./features/send_a_report'),
    create_short_url                        : require('./features/create_short_url'),
    check_license_availability              : require('./features/check_license_availability'),
    manually_force_license_refresh          : require('./features/manually_force_license_refresh'),
    remove_license_from_database            : require('./features/remove_license_from_database'),
    get_settings                            : require('./features/get_settings'),
    renew_session_based_on_remember_cookie  : require('./features/renew_session_based_on_remember_cookie'),
    grafana_health_information              : require('./features/grafana_health_information'),
    search_playlist                         : require('./features/search_playlist'),
    get_one_playlist                        : require('./features/get_one_playlist'),
    get_playlist_items                      : require('./features/get_playlist_items'),
    get_playlist_dashboards                 : require('./features/get_playlist_dashboards'),
    create_playlist                         : require('./features/create_playlist'),
    update_playlist                         : require('./features/update_playlist'),
    delete_playlist                         : require('./features/delete_playlist'),
    team_search                             : require('./features/team_search'),
    get_team_by_id                          : require('./features/get_team_by_id'),
    add_team                                : require('./features/add_team'),
    update_team                             : require('./features/update_team'),
    delete_team_by_id                       : require('./features/delete_team_by_id'),
    get_team_members                        : require('./features/get_team_members'),
    add_team_member                         : require('./features/add_team_member'),
    remove_member_from_team                 : require('./features/remove_member_from_team'),
    get_team_preferences                    : require('./features/get_team_preferences'),
    update_team_preferences                 : require('./features/update_team_preferences'),
         
}
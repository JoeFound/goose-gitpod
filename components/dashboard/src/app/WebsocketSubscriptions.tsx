/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

import { useListenToWorkspacesWSMessages } from "../data/workspaces/queries";

// This component is intended to setup any app-wide websocket subscriptions
export const WebsocketSubscriptions = () => {
    useListenToWorkspacesWSMessages();

    return null;
};

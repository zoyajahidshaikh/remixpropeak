import { serviceHost } from '../../../common/const';
import ServiceRequest from '../../../utils/service-request';

/**
 * Get app-level access state.
 * @returns {Object} Object with 'accessRightData' and 'err' properties.
 */
export const getAppLevelAccessState = async () => {
    try {
        const response = await ServiceRequest('get', 'json', `${serviceHost}/appLevelAccessRight`, '');
        return { accessRightData: response.data, err: null };
    } catch (err) {
        console.error("Error in getAppLevelAccessState:", err);
        return { accessRightData: null, err };
    }
};

/**
 * Save user app-level access right.
 * @param {Object} userAccessRights - User access rights data.
 * @returns {Object} Object with 'response' and 'err' properties.
 */
export const saveUserAppLevelAccessRight = async (userAccessRights: any) => {
    try {
        const response = await ServiceRequest('post', 'json', `${serviceHost}/appLevelAccessRight/save`, userAccessRights);
        return { response, err: null };
    } catch (err) {
        console.error("Error in saveUserAppLevelAccessRight:", err);
        return { response: null, err };
    }
};

/**
 * Get user app-level access rights.
 * @param {string} userId - User ID.
 * @returns {Object} Object with 'response' and 'err' properties.
 */
export const getUserAppLevelAccessRights = async (userId: string) => {
    try {
        const data = { userId };
        const response = await ServiceRequest('post', 'json', `${serviceHost}/appLevelAccessRight/get`, data);
        return { response, err: null };
    } catch (err) {
        console.error("Error in getUserAppLevelAccessRights:", err);
        return { response: null, err };
    }
};

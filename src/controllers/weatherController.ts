import { Request, Response, NextFunction } from 'express';
import { check, sanitize, validationResult } from 'express-validator';
import axios from 'axios';
import logger from '../util/logger';
import { cityNames } from '../util/constant';

/**
 * POST /getCityNames
 * Get weather data for given city.
 */
export const getCityNames = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.send(cityNames);
  } catch (error) {
    logger.error(error);
    res.send(error);
  }
};


/**
 * POST /getWeatherData
 * Get weather data for given city.
 */
export const getWeatherData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  await check('cityIds', 'city id is not valid').not().isEmpty().run(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(errors);
  }
  try {
    const cityIds = req.body.cityIds.join();
    logger.debug(cityIds);
    const url = `${process.env.OPEN_WEATHERMAP_API_URL}group?id=${cityIds}&units=metric&appid=${process.env.OPEN_WEATHERMAP_API_KEY}`;
    axios({
      method: 'get',
      url,
    })
      .then(function (response) {
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        logger.error(error);
        res.send(error);
      });
  } catch (error) {
    logger.error(error);
    res.send(error);
  }
};
